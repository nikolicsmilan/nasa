// src/routes/users/controllers/user.controller.js

const User = require('../../../models/users.mongo');

// Gets the profile of the logged-in user
async function httpGetUserProfile(req, res) {
  // ... (a httpGetUserProfile teljes kódja ide jön)
}

// Updates the profile of the logged-in user
async function httpUpdateUserProfile(req, res) {
  // ... (a httpUpdateUserProfile teljes kódja ide jön)
}

module.exports = {
  httpGetUserProfile,
  httpUpdateUserProfile,
};