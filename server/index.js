import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import bcrypt from 'bcrypt';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 8001;

dotenv.config();

const DB_URL = process.env.DATABASE_URL;

mongoose.connect(DB_URL).then(response => {
  app.listen(PORT, () => console.log(`Server is running on ${PORT} and connected to DB`));
}).catch(err => console.error(err));

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => { res.json('Hello from Express!')})

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