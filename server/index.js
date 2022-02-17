import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import mongoose from 'mongoose';
import { createServer } from 'http'
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 8001;

dotenv.config();

const DB_URL = process.env.DATABASE_URL;

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  }
});

io.on('connection', socket => {
    socket.on('join_room', data => {
      socket.join(data.room);
      console.log(`${socket.id}: ${data.user.username} joined room ${data.room}`);
    });
    socket.on('submit_my_number', data => {
      console.log(data);
      socket.to(data.room).emit('receive_number', data);
    });
  });

mongoose.connect(DB_URL).then(response => {
  console.log('Connected to MongoDB');
  httpServer.listen(PORT, () => console.log(`Server is running on ${PORT}`));
}).catch(err => console.error(err));

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', authRoutes);

app.use((err, req, res, next) => {
  console.log('im the error handler')
  res.status(500).json({ message: err.message });
});


process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('disconnected from DB');
    process.exit(0);
  });
});