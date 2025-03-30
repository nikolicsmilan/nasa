const { subscribers } = require('../../models/subscriber.model');

function httpGetAllsubscriptions(req, res) {
  return res.status(200).json(Array.from(subscribers.entries())); // Fixed: Using Array.from()
}

function httpAddNewSubscriber(req, res) {
  const { email, username } = req.body;

  if (!email || !username) {
    return res.status(400).json({ error: 'Missing email or username.' });
  }

  const newSubscriber = {
    _id: generateId(),
    email: email,
    subscriptionDate: Date.now(),
    username: username,
  };

  subscribers.set(newSubscriber._id, newSubscriber);
  return res.status(201).json(newSubscriber);
}

function httpAbortSubscriber(req, res) {
  const subscriberId = req.params.id;

  if (!subscribers.has(subscriberId)) {
    return res.status(404).json({ error: 'Subscriber not found.' });
  }

  subscribers.delete(subscriberId);
  return res.status(200).json({ message: 'Subscription successfully deleted.' });
}

function generateId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

module.exports = {
  httpGetAllsubscriptions,
  httpAddNewSubscriber,
  httpAbortSubscriber,
};