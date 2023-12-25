import { io } from 'socket.io-client';

const URL: string = process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_WS_SERVER : 'localhost:9876';

export const socket = io(URL, {
    autoConnect: false
});