const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); // Jelszó hash-eléshez

const userSchema = new mongoose.Schema({
  username: { // Ez lehet azonos a feliratkozó 'username'-jével, vagy lehet külön regisztrált név
    type: String,
    required: [true, 'Username is required'], // Kötelező regisztrált felhasználóknál
    unique: true,
    trim: true,
  },
  email: { // Ez lehet azonos a feliratkozó emailjével
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    // Egyszerű email validáció (lehet komplexebb regex is)
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  password: { // Csak regisztrált felhasználóknál (commenter, moderator, admin)
    type: String,
    // Kötelező, ha nem 'subscriber' vagy 'visitor_hr' a szerepkör
    required: function() { return !['subscriber', 'visitor_hr'].includes(this.role); },
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['subscriber', 'commenter', 'visitor_hr', 'moderator', 'admin'],
    required: true,
    default: 'subscriber', // Alapértelmezett szerepkör
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  // Egyéb mezők: lastLogin, profilePicture, stb.
  // ...
}, { timestamps: true }); // Hozzáad createdAt és updatedAt mezőket

// Jelszó hash-elése mentés előtt (csak ha módosult a jelszó)
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});

// Metódus a jelszó összehasonlítására
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
