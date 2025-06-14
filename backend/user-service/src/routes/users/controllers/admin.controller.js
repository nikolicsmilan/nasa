// src/routes/users/controllers/admin.controller.js

const User = require('../../../models/users.mongo');

// Lists all users (admin only)
async function httpGetAllUsers(req, res) {
  // ... (a httpGetAllUsers teljes kódja ide jön)
}

// Gets a specific user by ID (admin only)
async function httpGetUserById(req, res) {
  // ... (a httpGetUserById teljes kódja ide jön)
}

// Updates user details by an admin
async function httpUpdateUserById(req, res) {
  // ... (a httpUpdateUserById teljes kódja ide jön)
}

// Deletes a user by an admin
async function httpDeleteUserById(req, res) {
  // ... (a httpDeleteUserById teljes kódja ide jön)
}

module.exports = {
  httpGetAllUsers,
  httpGetUserById,
  httpUpdateUserById,
  httpDeleteUserById,
};