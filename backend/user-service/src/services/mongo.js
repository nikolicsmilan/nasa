const mongoose = require('mongoose');

require('dotenv').config();

// Update below to match your own MongoDB connection string.
const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});
/*
async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}*/
async function mongoConnect() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('MongoDB connection ready!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Fontos: Dobjuk tovább a hibát!
  }
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}