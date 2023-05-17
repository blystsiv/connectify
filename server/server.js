import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

dotenv.config();

const PORT = process.env.PORT || 6666;

const app = express();
const server = http.createServer(app);

app.use(cors());

// eslint-disable-next-line no-unused-vars
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

server.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
