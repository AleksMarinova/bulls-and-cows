import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 0666;

app.use(cors());
app.use(bodyParser.json());