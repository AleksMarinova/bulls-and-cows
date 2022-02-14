import express from 'express';
// const { Router } = express;
import { register } from '../controllers/auth.js'

const router = express.Router();

router.post('/register', register);

export default router;