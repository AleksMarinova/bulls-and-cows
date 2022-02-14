import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import bcrypt from 'bcrypt';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import { register } from './controllers/auth.js';

const app = express();
const PORT = process.env.PORT || 8001;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'))

app.use('/api/register', register);

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`));

// app.use((err, req, res, next) => {
//   console.log('im the error handler')
//   res.status(500).json({ message: err.message });
// });