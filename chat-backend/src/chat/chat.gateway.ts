import { WebSocketGateway, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';

type ChatMessage = {
  from: string;
  to?: string; // for private
  room?: string;
  text: string;
  timestamp?: number;
};

@WebSocketGateway({ cors: { origin: '*' } })
@Injectable()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  // map socketId -> email
  private clients = new Map<string, string>();
  // store messages by room
  private messageHistory = new Map<string, ChatMessage[]>();

  handleConnection(client: Socket) {
    // clients should send an "identify" event after connecting with their email
  }

  handleDisconnect(client: Socket) {
    this.clients.delete(client.id);
  }

  @SubscribeMessage('identify')
  handleIdentify(client: Socket, payload: { email: string }) {
    const email = payload?.email ?? 'unknown';
    this.clients.set(client.id, email);
    return { ok: true, email };
  }

  @SubscribeMessage('join')
  handleJoin(client: Socket, payload: { room: string }) {
    client.join(payload.room);
    return { ok: true, room: payload.room };
  }

  @SubscribeMessage('leave')
  handleLeave(client: Socket, payload: { room: string }) {
    client.leave(payload.room);
    return { ok: true, room: payload.room };
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: ChatMessage) {
    const from = this.clients.get(client.id) ?? payload.from ?? 'unknown';
    const timestamp = Date.now();

    if (payload.room) {
      const message = { ...payload, from, timestamp };
      this.storeMessage(payload.room, message);
      this.server.to(payload.room).emit('message', message);
      return { ok: true };
    }

    // private message to recipient's socket(s)
    if (payload.to) {
      // private room convention: private:<email1>|<email2> sorted
      const room = generatePrivateRoomName(from, payload.to);
      const message = { ...payload, from, room, timestamp };
      this.storeMessage(room, message);
      this.server.to(room).emit('message', message);
      return { ok: true };
    }

    return { error: 'invalid message' };
  }

  @SubscribeMessage('getMessages')
  handleGetMessages(client: Socket, payload: { room: string }) {
    const messages = this.messageHistory.get(payload.room) || [];
    return { messages };
  }

  private storeMessage(room: string, message: ChatMessage) {
    if (!this.messageHistory.has(room)) {
      this.messageHistory.set(room, []);
    }
    const messages = this.messageHistory.get(room)!;
    messages.push(message);
    // Keep only last 100 messages per room
    if (messages.length > 100) {
      messages.shift();
    }
  }
}

function generatePrivateRoomName(a: string, b: string) {
  const arr = [a, b].sort();
  return `private:${arr[0]}|${arr[1]}`;
}
