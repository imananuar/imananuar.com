import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:9876';

export const socket = io("http://localhost:9876", {
    autoConnect: false
});