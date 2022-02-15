import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
});

const user = mongoose.model('user', userSchema, 'users');

export default user;