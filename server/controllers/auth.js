import bcrypt from 'bcrypt';
import user from '../schemas/User.js'

export const register = (req, res, next) => {
  const { email, name, password } = req.body;
  if (user.findOne({ username }) || user.findOne({ email })) {
    return res.status(400).json({ message: 'Please try again'})
  }
}

