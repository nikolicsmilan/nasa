const axios = require("axios");

const subscriberDatabase = require("./subscriber.mongo");

const subscriber = {
    _id: "...",
    email: "hlajos8721@gmail.com",
    subscriptionType: "daily_asteroid_alerts",
    subscriptionStatus: "active", // "unsubscribed", "bounced"
    subscriptionDate: Date.now(),
};

async function createSubscriber(subscriberData) {
  try {
    const subscriber = new subscriberDatabase(subscriberData); // subscriberDatabase itt már a modell
    await subscriber.save();
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
      { new: true } // Visszaadja a frissített objektumot
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
};
