const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  _id: {  // Egyedi azonosító
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true // Automatikusan generálja a MongoDB
  },
  email: {
    type: String,
    required: true,
    unique: true, // Fontos, hogy az email egyedi legyen
    trim: true,
    lowercase: true,
  },
  subscriptionDate: {
    type: Date,
    default: Date.now,
  },
  user: { // Hivatkozás a felhasználóra
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model("Subscriber", subscriberSchema);
