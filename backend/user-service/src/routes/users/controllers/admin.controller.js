// src/routes/users/controllers/admin.controller.js

const User = require('../../../models/users.mongo');

// Lists all users (admin only).
async function httpGetAllUsers(req, res) {
  // TODO: Pagination could be useful here for large numbers of users.
  try {
    const users = await User.find({}).select("-password"); // Fetches all users, excluding their passwords.
    return res.status(200).json(users);
  } catch (error) {
    console.error("Get all users error:", error);
    //logEvents(`Get All Users Error: ${error.message}`, 'errorLog.txt');
    return res.status(500).json({ error: "Server error fetching all users." });
  }
}

// Gets a specific user by ID (admin only).
async function httpGetUserById(req, res) {
  const { id } = req.params; // Extracts user ID from route parameters.
  try {
    const user = await User.findById(id).select("-password"); // Finds user by ID, excludes password.
    if (!user) {
      // If user not found.
      return res.status(404).json({ error: "User not found." });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(`Get user by ID (${id}) error:`, error);
    //logEvents(`Get User By ID Error: ${error.message}`, 'errorLog.txt');
    if (error.name === "CastError") {
      // Handles invalid ObjectId format for ID.
      return res.status(400).json({ error: "Invalid user ID format." });
    }
    return res.status(500).json({ error: "Server error fetching user." });
  }
}



// Updates user details (e.g., role) by an admin.
async function httpUpdateUserById(req, res) {
  const { id } = req.params; // User ID to update.
  const { username, email, role /* other fields admin can update */ } =
    req.body; // Data for update.

  const updates = {}; // Object to hold fields to be updated.
  if (username) updates.username = username;
  if (email) updates.email = email.toLowerCase();
  if (role) {
    // If role is being updated.
    if (
      !["subscriber", "commenter", "visitor_hr", "moderator", "admin"].includes(
        role
      )
    ) {
      // Validates role.
      return res.status(400).json({ error: "Invalid role specified." });
    }
    updates.role = role;
  }
  // Admin password updates should be handled with extreme care, possibly a separate, more secure process, or not allowed directly.

  if (Object.keys(updates).length === 0) {
    // If no data provided for update.
    return res.status(400).json({ error: "No update data provided." });
  }

  try {
    // Check if the new email/username is already in use by ANOTHER user.
    if (updates.email) {
      const existingUser = await User.findOne({
        email: updates.email,
        _id: { $ne: id },
      }); // $ne: not equal to the ID being updated.
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
        _id: { $ne: id },
      });
      if (existingUser)
        return res
          .status(409)
          .json({ error: "New username is already taken by another account." });
    }

    // Finds user by ID, updates, returns new version, runs validators, excludes password.
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    }).select("-password");
    if (!updatedUser) {
      return res
        .status(404)
        .json({ error: "User not found for update by admin." });
    }
    return res
      .status(200)
      .json({
        message: "User updated successfully by admin.",
        user: updatedUser,
      });
  } catch (error) {
    console.error(`Admin update user (${id}) error:`, error);
    //logEvents(`Admin Update User Error: ${error.message}`, 'errorLog.txt');
    if (
      error.code === 11000 ||
      (error.message && error.message.includes("duplicate key"))
    ) {
      // Handles duplicate key errors.
      return res
        .status(409)
        .json({ error: "The new email or username is already in use." });
    }
    if (error.name === "ValidationError" || error.name === "CastError") {
      // Handles validation or invalid ID format errors.
      return res.status(400).json({ error: error.message });
    }
    return res
      .status(500)
      .json({ error: "Server error updating user by admin." });
  }
}



// Deletes a user by an admin.
async function httpDeleteUserById(req, res) {
  const { id } = req.params; // User ID to delete.
  try {
    // Important: Consider what happens to data associated with the user (e.g., comments, subscriptions).
    // A "soft delete" (e.g., setting an `isActive: false` flag) might be preferable to actual deletion.
    const deletedUser = await User.findByIdAndDelete(id); // Deletes the user by ID.
    if (!deletedUser) {
      // If user not found.
      return res.status(404).json({ error: "User not found for deletion." });
    }
    // logEvents(`User deleted by admin: ${id}, Admin: ${req.user?.id || 'Unknown'}`, 'adminActionsLog.txt');
    return res
      .status(200)
      .json({ message: "User deleted successfully by admin." });
  } catch (error) {
    console.error(`Admin delete user (${id}) error:`, error);
    //logEvents(`Admin Delete User Error: ${error.message}`, 'errorLog.txt');
    if (error.name === "CastError") {
      // Handles invalid ID format.
      return res.status(400).json({ error: "Invalid user ID format." });
    }
    return res
      .status(500)
      .json({ error: "Server error deleting user by admin." });
  }
}

module.exports = {
  httpGetAllUsers,
  httpGetUserById,
  httpUpdateUserById,
  httpDeleteUserById,
};