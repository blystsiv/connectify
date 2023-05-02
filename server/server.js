import express from 'express';
import http from 'http';
import cors from 'cors';
import twilio from 'twilio';
import { v4 as uuidv4 } from 'uuid';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 6666;

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

server.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
