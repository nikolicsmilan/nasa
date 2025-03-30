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
    enum: ['visitor', 'admin'], // Permission levels
    default: 'visitor',
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  subscriptions: [{ // Subscriptions array
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subscriber'
  }],
  // Additional fields for the user profile (optional)
  // profilePicture: { type: String },
  // location: { type: String },
  // bio: { type: String },
});
module.exports = mongoose.model('User', userSchema);
