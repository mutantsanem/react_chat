import { WebSocketGateway, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { GroupsService } from './groups.service';

type ChatMessage = {
  from: string;
  to?: string; // for private or group id
  room?: string;
  text: string;
  isGroup?: boolean;
};

@WebSocketGateway({ cors: { origin: '*' } })
@Injectable()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  // map socketId -> email
  private clients = new Map<string, string>();

  constructor(private readonly groups: GroupsService) {}

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

    if (payload.isGroup && payload.to) {
      // send to room named by group id
      const room = `group:${payload.to}`;
      this.server.to(room).emit('message', { ...payload, from, room });
      return { ok: true };
    }

    if (payload.room) {
      this.server.to(payload.room).emit('message', { ...payload, from });
      return { ok: true };
    }

    // private message to recipient's socket(s)
    if (payload.to) {
      // private room convention: private:<email1>|<email2> sorted
      const room = generatePrivateRoomName(from, payload.to);
      this.server.to(room).emit('message', { ...payload, from, room });
      return { ok: true };
    }

    return { error: 'invalid message' };
  }

  @SubscribeMessage('createGroup')
  handleCreateGroup(client: Socket, payload: { id: string; name: string }) {
    const creator = this.clients.get(client.id) ?? 'unknown';
    const g = this.groups.createGroup(payload.id, payload.name, creator);
    if (!g) return { error: 'exists' };
    return { ok: true, group: g };
  }
}

function generatePrivateRoomName(a: string, b: string) {
  const arr = [a, b].sort();
  return `private:${arr[0]}|${arr[1]}`;
}
