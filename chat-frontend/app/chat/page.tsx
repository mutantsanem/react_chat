"use client";

import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export default function ChatPage() {
  const [connected, setConnected] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [isGroup, setIsGroup] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState('');
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);
  const [chats, setChats] = useState<any[]>([]);
  const [directChats, setDirectChats] = useState<any[]>([]);
  const [newChatEmail, setNewChatEmail] = useState('');
  const mounted = useRef(false);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mounted.current = true;
    // restore user from localStorage
    try {
      const u = localStorage.getItem('user');
      if (u) {
        const parsed = JSON.parse(u);
        setEmail(parsed.email || '');
        setName(parsed.name || '');
      }
      // restore direct chats from localStorage
      const dc = localStorage.getItem('directChats');
      if (dc) {
        setDirectChats(JSON.parse(dc));
      }
    } catch (e) {}
    fetchChats();
    return () => { mounted.current = false; if (socket) socket.disconnect(); };
  }, []);

  useEffect(() => {
    // auto-connect once email is restored from localStorage
    if (email && !connected) {
      connect();
    }
  }, [email, connected]);

  useEffect(() => {
    // persist direct chats to localStorage whenever they change
    try {
      localStorage.setItem('directChats', JSON.stringify(directChats));
    } catch (e) {}
  }, [directChats]);

  useEffect(() => {
    // scroll to bottom when messages change
    const el = messagesRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  async function fetchChats() {
    try {
      const base = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:5000';
      const res = await fetch(`${base}/groups`);
      if (res.ok) {
        const list = await res.json();
        setChats(list || []);
      }
    } catch (e) { /* ignore */ }
  }

  function createDirectChat() {
    const e = newChatEmail.trim().toLowerCase();
    if (!e) return alert('enter an email');
    if (e === email) return alert('Cannot start a chat with yourself');
    if (directChats.find((d) => d.email === e)) {
      openChat({ type: 'direct', email: e });
      setNewChatEmail('');
      return;
    }
    const item = { type: 'direct', email: e, name: e };
    setDirectChats((s) => [item, ...s]);
    openChat(item);
    setNewChatEmail('');
  }

  function connect() {
    if (!email) return alert('enter email');
    socket = io(process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:5000', { transports: ['websocket'] });
    socket.on('connect', () => {
      setConnected(true);
      socket?.emit('identify', { email });
    });
    socket.on('message', (m) => {
      setMessages((s) => [...s, m]);
    });
    socket.on('disconnect', () => setConnected(false));
  }

  function openChat(item: any) {
    // leave previous room if any
    if (socket && currentRoom) {
      socket.emit('leave', { room: currentRoom });
    }

    if (item.type === 'group') {
      setIsGroup(true);
      setTarget(item.id);
      const room = `group:${item.id}`;
      // join group room so we receive group messages
      socket?.emit('join', { room });
      setCurrentRoom(room);
    } else {
      setIsGroup(false);
      setTarget(item.email);
      // private room naming must match backend
      const me = email;
      const arr = [me, item.email].sort();
      const room = `private:${arr[0]}|${arr[1]}`;
      socket?.emit('join', { room });
      setCurrentRoom(room);
    }
    setMessages([]);
  }

  function send() {
    if (!socket) return alert('connect first');
    if (!target) return alert('select a chat or enter a target');
    const payload = { from: email, to: target || undefined, text, isGroup };
    socket.emit('message', payload);
    // rely on server broadcast to deliver the message (prevents duplicate local echo)
    setText('');
  }

  async function createGroup() {
    if (!target) return alert('provide group id');
    const base = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:5000';
    const res = await fetch(`${base}/groups/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: target, name: target, creator: email }),
    });
    const j = await res.json();
    alert(JSON.stringify(j));
    fetchChats();
  }

  return (
    <div className="chat-app">
      <div className="sidebar">
        <div className="header">My Chat</div>
        <div className="search">
          <input placeholder="Search chats" style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
        </div>

        <div style={{ padding: 12, borderBottom: '1px solid #f4f4f4' }}>
          <div style={{ fontSize: 13, color: '#444', fontWeight: 600, marginBottom: 8 }}>New chat</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input placeholder="Email address" value={newChatEmail} onChange={(e) => setNewChatEmail(e.target.value)} style={{ flex: 1, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
            <button onClick={createDirectChat} className="send-btn" style={{ padding: '8px 12px' }}>Start</button>
          </div>
        </div>

        <div className="chats">
          <div style={{ padding: 12, fontWeight: 700 }}>Groups</div>
          {chats.map((g: any) => (
            <div key={g.id} className="chat-item" onClick={() => openChat({ type: 'group', id: g.id })}>
              <div className="avatar">{g.name?.[0]?.toUpperCase() ?? 'G'}</div>
              <div>
                <div style={{ fontWeight: 600 }}>{g.name}</div>
                <div style={{ fontSize: 12, color: '#666' }}>{g.members?.slice(0,2).join(', ')}</div>
              </div>
            </div>
          ))}
          <div style={{ padding: 12, fontWeight: 700 }}>Direct Chats</div>
          {directChats.map((d: any) => (
            <div key={d.email} className="chat-item" onClick={() => openChat({ type: 'direct', email: d.email })}>
              <div className="avatar">{d.name?.[0]?.toUpperCase() ?? d.email?.[0]?.toUpperCase() ?? 'U'}</div>
              <div>
                <div style={{ fontWeight: 600 }}>{d.name || d.email}</div>
                <div style={{ fontSize: 12, color: '#666' }}>{d.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-window">
        <div className="header">
          <div className="avatar">{(target && !isGroup) ? target[0]?.toUpperCase() : (name?.[0]?.toUpperCase() ?? 'C')}</div>
          <div style={{ fontWeight: 700 }}>{target || 'Select a chat'}</div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ textAlign: 'right' }}>
              {/* <div style={{ fontWeight: 700 }}>{name || 'You'}</div> */}
              {/* <div style={{ fontSize: 12, color: '#666' }}>{email}</div> */}
            </div>
            <button onClick={connect} disabled={connected} className="send-btn" style={{ background: connected ? '#999' : '#128c7e' }}>{connected ? 'Connected' : 'Connect'}</button>
          </div>
        </div>

        <div className="messages" ref={messagesRef}>
          {messages.map((m, i) => {
            const outgoing = m.from === email;
            return (
              <div key={i} className={`message ${outgoing ? 'outgoing' : 'incoming'}`}>
                <div className="bubble">
                  <div style={{ fontSize: 13 }}>{m.text}</div>
                  <div style={{ fontSize: 11, color: '#666', marginTop: 6 }}>{outgoing ? 'You' : m.from}{m.room ? ` • ${m.room}` : ''}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="input-bar">
          <input placeholder="Type a message" value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{ if(e.key==='Enter') send(); }} />
          <button className="send-btn" onClick={send}>Send</button>
          <button onClick={createGroup} style={{ marginLeft: 8, borderRadius: 8, padding: '8px 12px' }}>Create Group</button>
        </div>
      </div>
    </div>
  );
}
