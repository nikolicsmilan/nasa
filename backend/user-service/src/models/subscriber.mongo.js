const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  _id: {  // Egyedi azonosító
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true // Automatikusan generálja a MongoDB
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Fontos, hogy az email egyedi legyen
  },
  subscriptionDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Subscriber", subscriberSchema);
