(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/chat-frontend/app/chat/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/chat-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/chat-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/chat-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/chat-frontend/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
let socket = null;
function ChatPage() {
    _s();
    const [connected, setConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [target, setTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isGroup, setIsGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentRoom, setCurrentRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [directChats, setDirectChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newChatEmail, setNewChatEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPage.useEffect": ()=>{
            mounted.current = true;
            // restore user from localStorage and auto-connect
            try {
                const u = localStorage.getItem('user');
                if (u) {
                    const parsed = JSON.parse(u);
                    setEmail(parsed.email || '');
                    setName(parsed.name || '');
                    // auto-connect
                    setTimeout({
                        "ChatPage.useEffect": ()=>{
                            if (!connected) connect();
                        }
                    }["ChatPage.useEffect"], 100);
                }
            } catch (e) {}
            fetchChats();
            return ({
                "ChatPage.useEffect": ()=>{
                    mounted.current = false;
                    if (socket) socket.disconnect();
                }
            })["ChatPage.useEffect"];
        }
    }["ChatPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPage.useEffect": ()=>{
            // scroll to bottom when messages change
            const el = messagesRef.current;
            if (el) el.scrollTop = el.scrollHeight;
        }
    }["ChatPage.useEffect"], [
        messages
    ]);
    async function fetchChats() {
        try {
            const base = __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:5000';
            const res = await fetch(`${base}/groups`);
            if (res.ok) {
                const list = await res.json();
                setChats(list || []);
            }
        } catch (e) {}
    }
    function createDirectChat() {
        const e = newChatEmail.trim().toLowerCase();
        if (!e) return alert('enter an email');
        if (e === email) return alert('Cannot start a chat with yourself');
        if (directChats.find((d)=>d.email === e)) {
            openChat({
                type: 'direct',
                email: e
            });
            setNewChatEmail('');
            return;
        }
        const item = {
            type: 'direct',
            email: e,
            name: e
        };
        setDirectChats((s)=>[
                item,
                ...s
            ]);
        openChat(item);
        setNewChatEmail('');
    }
    function connect() {
        if (!email) return alert('enter email');
        socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:5000', {
            transports: [
                'websocket'
            ]
        });
        socket.on('connect', ()=>{
            setConnected(true);
            socket?.emit('identify', {
                email
            });
        });
        socket.on('message', (m)=>{
            setMessages((s)=>[
                    ...s,
                    m
                ]);
        });
        socket.on('disconnect', ()=>setConnected(false));
    }
    function openChat(item) {
        // leave previous room if any
        if (socket && currentRoom) {
            socket.emit('leave', {
                room: currentRoom
            });
        }
        if (item.type === 'group') {
            setIsGroup(true);
            setTarget(item.id);
            const room = `group:${item.id}`;
            // join group room so we receive group messages
            socket?.emit('join', {
                room
            });
            setCurrentRoom(room);
        } else {
            setIsGroup(false);
            setTarget(item.email);
            // private room naming must match backend
            const me = email;
            const arr = [
                me,
                item.email
            ].sort();
            const room = `private:${arr[0]}|${arr[1]}`;
            socket?.emit('join', {
                room
            });
            setCurrentRoom(room);
        }
        setMessages([]);
    }
    function send() {
        if (!socket) return alert('connect first');
        if (!target) return alert('select a chat or enter a target');
        const payload = {
            from: email,
            to: target || undefined,
            text,
            isGroup
        };
        socket.emit('message', payload);
        // rely on server broadcast to deliver the message (prevents duplicate local echo)
        setText('');
    }
    async function createGroup() {
        if (!target) return alert('provide group id');
        const base = __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:5000';
        const res = await fetch(`${base}/groups/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: target,
                name: target,
                creator: email
            })
        });
        const j = await res.json();
        alert(JSON.stringify(j));
        fetchChats();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chat-app",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "header",
                        children: "My Chat"
                    }, void 0, false, {
                        fileName: "[project]/chat-frontend/app/chat/page.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "search",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Search chats",
                            style: {
                                width: '100%',
                                padding: 8,
                                borderRadius: 8,
                                border: '1px solid #eee'
                            }
                        }, void 0, false, {
                            fileName: "[project]/chat-frontend/app/chat/page.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/chat-frontend/app/chat/page.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: 12,
                            borderBottom: '1px solid #f4f4f4'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 13,
                                    color: '#444',
                                    fontWeight: 600,
                                    marginBottom: 8
                                },
                                children: "New chat"
                            }, void 0, false, {
                                fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        placeholder: "Email address",
                                        value: newChatEmail,
                                        onChange: (e)=>setNewChatEmail(e.target.value),
                                        style: {
                                            flex: 1,
                                            padding: 8,
                                            borderRadius: 8,
                                            border: '1px solid #eee'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: createDirectChat,
                                        className: "send-btn",
                                        style: {
                                            padding: '8px 12px'
                                        },
                                        children: "Start"
                                    }, void 0, false, {
                                        fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/chat-frontend/app/chat/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: 12,
                                    fontWeight: 700
                                },
                                children: "Groups"
                            }, void 0, false, {
                                fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            chats.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "chat-item",
                                    onClick: ()=>openChat({
                                            type: 'group',
                                            id: g.id
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "avatar",
                                            children: g.name?.[0]?.toUpperCase() ?? 'G'
                                        }, void 0, false, {
                                            fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: 600
                                                    },
                                                    children: g.name
                                                }, void 0, false, {
                                                    fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 12,
                                                        color: '#666'
                                                    },
                                                    children: g.members?.slice(0, 2).join(', ')
                                                }, void 0, false, {
                                                    fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, g.id, true, {
                                    fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: 12,
                                    fontWeight: 700
                                },
                                children: "Direct Chats"
                            }, void 0, false, {
                                fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            directChats.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "chat-item",
                                    onClick: ()=>openChat({
                                            type: 'direct',
                                            email: d.email
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "avatar",
                                            children: d.name?.[0]?.toUpperCase() ?? d.email?.[0]?.toUpperCase() ?? 'U'
                                        }, void 0, false, {
                                            fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: 600
                                                    },
                                                    children: d.name || d.email
                                                }, void 0, false, {
                                                    fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 12,
                                                        color: '#666'
                                                    },
                                                    children: d.email
                                                }, void 0, false, {
                                                    fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, d.email, true, {
                                    fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/chat-frontend/app/chat/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/chat-frontend/app/chat/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-window",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "avatar",
                                children: target && !isGroup ? target[0]?.toUpperCase() : name?.[0]?.toUpperCase() ?? 'C'
                            }, void 0, false, {
                                fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 700
                                },
                                children: target || 'Select a chat'
                            }, void 0, false, {
                                fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginLeft: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: 'right'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: connect,
                                        disabled: connected,
                                        className: "send-btn",
                                        style: {
                                            background: connected ? '#999' : '#128c7e'
                                        },
                                        children: connected ? 'Connected' : 'Connect'
                                    }, void 0, false, {
                                        fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/chat-frontend/app/chat/page.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "messages",
                        ref: messagesRef,
                        children: messages.map((m, i)=>{
                            const outgoing = m.from === email;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `message ${outgoing ? 'outgoing' : 'incoming'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bubble",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 13
                                            },
                                            children: m.text
                                        }, void 0, false, {
                                            fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                color: '#666',
                                                marginTop: 6
                                            },
                                            children: [
                                                outgoing ? 'You' : m.from,
                                                m.room ? ` • ${m.room}` : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, this)
                            }, i, false, {
                                fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/chat-frontend/app/chat/page.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "input-bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "Type a message",
                                value: text,
                                onChange: (e)=>setText(e.target.value),
                                onKeyDown: (e)=>{
                                    if (e.key === 'Enter') send();
                                }
                            }, void 0, false, {
                                fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "send-btn",
                                onClick: send,
                                children: "Send"
                            }, void 0, false, {
                                fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: createGroup,
                                style: {
                                    marginLeft: 8,
                                    borderRadius: 8,
                                    padding: '8px 12px'
                                },
                                children: "Create Group"
                            }, void 0, false, {
                                fileName: "[project]/chat-frontend/app/chat/page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/chat-frontend/app/chat/page.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/chat-frontend/app/chat/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/chat-frontend/app/chat/page.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(ChatPage, "uZECY4kLwDmvWRZH+4EK7iON9JQ=");
_c = ChatPage;
var _c;
__turbopack_context__.k.register(_c, "ChatPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=chat-frontend_app_chat_page_tsx_f8706a31._.js.map