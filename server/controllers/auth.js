import bcrypt from 'bcrypt';
import user from '../schemas/User.js'

export const register = async (req, res, next) => {
  const { email, username, password } = req.body;
  const validateEmail = await user.findOne({ email });
  if (validateEmail) {
    return res.status(400).json({ message: 'Please try again'})
  } 
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new user({ email, username, password: hashedPassword});
  newUser.save().then(() => res.status(201).json({ message: 'User created'}));
}

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Please try again'});
  }
  const userInDatabase = await user.findOne({ email });
  if (!userInDatabase) {
    return res.status(400).json({ message: 'Please try again'});
  }
  const descryptedPassword = bcrypt.compareSync(password, userInDatabase.password);
  if (!descryptedPassword) {
    return res.status(400).json({ message: 'Please try again'});
  }
  if (userInDatabase && descryptedPassword) {
    res.status(200).json({ email: userInDatabase.email, username: userInDatabase.username })
  }
}