import bcrypt from 'bcrypt';
import user from '../schemas/User.js'

export const register = (req, res, next) => {
  const { email, name, password } = req.body;
}

