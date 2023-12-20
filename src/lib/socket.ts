import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? "https://ws.imananuar.com" : 'https://ws.imananuar.com';

export const socket = io(URL, {
    autoConnect: false
});