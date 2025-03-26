const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['visitor', 'admin'], // Jogosultsági szintek
    default: 'visitor',
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  // További mezők a felhasználói profilhoz (opcionális):
  // profilePicture: { type: String },
  // location: { type: String },
  // bio: { type: String },
});

const User = mongoose.model('User', userSchema); // Az adatbázisban "users" néven lesz tárolva
module.exports = User;