const axios = require("axios");

const subscriberDatabase = require("./subscriber.mongo");
const User = require('./users.mongo');

const subscribers = new Map();
const subscriber = {
  _id: "64d94e6f7b4d4a0021a8b7f2", 
  email: "hlajos8721@gmail.com",
  subscriptionDate: Date.now(),
  user: "64d94e6f7b4d4a0021a8b7f1" 
};
subscribers.set(subscriber._id,subscriber)

module.exports = {
  subscribers
}
/*
async function createSubscriber(subscriberData, userId) {
  try {
    const subscriber = new subscriberDatabase(subscriberData);
    subscriber.user = userId; // add userd id
    await subscriber.save();

    // Update  a User "subscriptions" array
    const user = await User.findById(userId);
    user.subscriptions.push(subscriber._id);
    await user.save();

    return subscriber;
  } catch (error) {
    console.error("Hiba a feliratkozó létrehozásakor:", error);
    throw error;
  }
}
async function getSubscriberById(subscriberId) {
  try {
    const subscriber = await subscriberDatabase.findById(subscriberId);
    return subscriber;
  } catch (error) {
    console.error("Hiba a feliratkozó lekérdezésekor ID alapján:", error);
    throw error;
  }
}

async function getSubscriberByEmail(email) {
  try {
    const subscriber = await subscriberDatabase.findOne({ email: email });
    return subscriber;
  } catch (error) {
    console.error("Hiba a feliratkozó lekérdezésekor email alapján:", error);
    throw error;
  }
}

async function getAllSubscribers() {
  try {
    const subscribers = await subscriberDatabase.find({});
    return subscribers;
  } catch (error) {
    console.error("Hiba az összes feliratkozó lekérdezésekor:", error);
    throw error;
  }
}

async function updateSubscriber(subscriberId, updateData) {
  try {
    const subscriber = await subscriberDatabase.findByIdAndUpdate(
      subscriberId,
      updateData,
      { new: true } // return updated object
    );
    return subscriber;
  } catch (error) {
    console.error("Hiba a feliratkozó frissítésekor:", error);
    throw error;
  }
}

async function deleteSubscriber(subscriberId) {
  try {
    await subscriberDatabase.findByIdAndDelete(subscriberId);
  } catch (error) {
    console.error("Hiba a feliratkozó törlésekor:", error);
    throw error;
  }
}

module.exports = {
  createSubscriber,
  getSubscriberById,
  getSubscriberByEmail,
  getAllSubscribers,
  updateSubscriber,
  deleteSubscriber,
};*/
