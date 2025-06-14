// src/routes/users/controllers/auth.controller.js

const User = require('../../../models/users.mongo');

// Handles new user registration (full registration with password)
async function httpRegisterNewUser(req, res) {
  const { username, email, password, role } = req.body;

  if (!username || !email) {
    return res.status(400).json({ error: "Username and email are required." });
  }
  if (role && !["subscriber", "commenter", "visitor_hr", "moderator", "admin"].includes(role)) {
    return res.status(400).json({ error: "Invalid role specified." });
  }
  if (!["subscriber", "visitor_hr"].includes(role || "subscriber") && !password) {
    return res.status(400).json({ error: "Password is required for this role." });
  }

  try {
    const existingUserByEmail = await User.findOne({ email: email.toLowerCase() });
    if (existingUserByEmail) {
      return res.status(409).json({ error: "Email address already in use." });
    }
    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return res.status(409).json({ error: "Username already taken." });
    }

    const newUser = new User({
      username,
      email: email.toLowerCase(),
      password,
      role: role || "subscriber",
    });

    const savedUser = await newUser.save();
    const userResponse = {
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      role: savedUser.role,
      createdAt: savedUser.createdAt,
    };

    return res.status(201).json({ message: "User registered successfully.", user: userResponse });
  } catch (error) {
    console.error("Registration error:", error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "Server error during registration." });
  }
}

// Handles user login
async function httpLoginUser(req, res) {
  // ... (a httpLoginUser teljes kódja ide jön)
  // (A te eredeti fájlodból másold át)
}

// Handles user logout
async function httpLogoutUser(req, res) {
  return res.status(200).json({ message: "Logout successful. Please clear your token on the client side." });
}

// Handles simple user subscription
async function httpSubscribeUser(req, res) {
  // ... (a httpSubscribeUser teljes kódja ide jön)
  // (A te eredeti fájlodból másold át)
}

module.exports = {
  httpRegisterNewUser,
  httpLoginUser,
  httpLogoutUser,
  httpSubscribeUser,
};