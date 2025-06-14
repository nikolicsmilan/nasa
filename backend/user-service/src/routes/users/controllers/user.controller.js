// src/routes/users/controllers/user.controller.js

const User = require('../../../models/users.mongo');

// Gets the profile of the logged-in user.
async function httpGetUserProfile(req, res) {
    // Assumes an `authenticateToken` middleware places user data (e.g., ID) into `req.user`.
    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ error: "Unauthorized. No user information in request." });
    }
    try {
      const user = await User.findById(req.user.id).select("-password"); // Fetches user by ID, excludes password.
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error("Get profile error:", error);
      //logEvents(`Get Profile Error: ${error.message}`, 'errorLog.txt');
      return res.status(500).json({ error: "Server error fetching profile." });
    }
  }

// Updates the profile of the logged-in user.
async function httpUpdateUserProfile(req, res) {
    if (!req.user || !req.user.id) {
      // Ensures user is authenticated.
      return res.status(401).json({ error: "Unauthorized." });
    }
    const { username, email /* other updatable fields */ } = req.body; // Gets updatable fields from request body.
    const updates = {}; // Object to hold fields to be updated.
    if (username) updates.username = username;
    if (email) updates.email = email.toLowerCase();
    // Password updates should be handled via a separate endpoint or with special logic (e.g., current password confirmation).
  
    if (Object.keys(updates).length === 0) {
      // If no data to update is provided.
      return res.status(400).json({ error: "No update data provided." });
    }
  
    try {
      // Check if the new email/username is already in use by ANOTHER user.
      if (updates.email) {
        const existingUser = await User.findOne({
          email: updates.email,
          _id: { $ne: req.user.id },
        }); // $ne: not equal to current user's ID.
        if (existingUser)
          return res
            .status(409)
            .json({
              error: "New email address is already in use by another account.",
            });
      }
      if (updates.username) {
        const existingUser = await User.findOne({
          username: updates.username,
          _id: { $ne: req.user.id },
        });
        if (existingUser)
          return res
            .status(409)
            .json({ error: "New username is already taken by another account." });
      }
  
      // Finds user by ID, updates it, returns the new version, and runs validators. Excludes password.
      const updatedUser = await User.findByIdAndUpdate(req.user.id, updates, {
        new: true,
        runValidators: true,
      }).select("-password");
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found for update." });
      }
      return res
        .status(200)
        .json({ message: "Profile updated successfully.", user: updatedUser });
    } catch (error) {
      console.error("Update profile error:", error);
      //logEvents(`Update Profile Error: ${error.message}`, 'errorLog.txt');
      if (
        error.code === 11000 ||
        (error.message && error.message.includes("duplicate key"))
      ) {
        // Handles duplicate key errors for unique fields.
        return res
          .status(409)
          .json({ error: "The new email or username is already in use." });
      }
      if (error.name === "ValidationError") {
        // Handles Mongoose validation errors.
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: "Server error updating profile." });
    }
  }
module.exports = {
  httpGetUserProfile,
  httpUpdateUserProfile,
};