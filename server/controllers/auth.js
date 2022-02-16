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
  const userInDatabase = await user.findOne({ email });
  const descryptedPassword = bcrypt.compareSync(password, userInDatabase.password);
  if (userInDatabase && descryptedPassword) {
    console.log(req.body, userInDatabase.email, userInDatabase.username);
    res.status(200).json({ email: userInDatabase.email, username: userInDatabase.username })
  }
}