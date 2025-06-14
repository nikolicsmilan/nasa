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

// Handles user login.
async function httpLoginUser(req, res) {
  const { email, password } = req.body; // Extracts email and password from the request body.

  if (!email || !password) {
    // Validates that both email and password are provided.
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const user = await User.findOne({ email: email.toLowerCase() }); // Finds the user by email.
    if (!user) {
      // If user is not found.
      return res
        .status(401)
        .json({ error: "Invalid credentials. User not found." }); // 401 Unauthorized.
    }

    // Check if the user's role allows password-based login.
    if (["subscriber", "visitor_hr"].includes(user.role) && !user.password) {
      return res
        .status(403)
        .json({
          error: "Login not applicable for this user type without a password.",
        }); // 403 Forbidden.
    }

    const isMatch = await user.comparePassword(password); // Compares the provided password with the stored hashed password using the method defined on the User model.
    if (!isMatch) {
      // If passwords do not match.
      return res
        .status(401)
        .json({ error: "Invalid credentials. Password incorrect." });
    }

    // Successful login.
    // TODO: Generate and return a JWT token here.
    // const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const userResponse = {
      // Prepare user data for the response, excluding the password.
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    // return res.status(200).json({ message: 'Login successful.', user: userResponse, token });
    return res
      .status(200)
      .json({ message: "Login successful.", user: userResponse });
  } catch (error) {
    console.error("Login error:", error);
    //logEvents(`Login Error: ${error.message}`, 'errorLog.txt');
    return res.status(500).json({ error: "Server error during login." });
  }
}

// Handles user logout (placeholder - actual logic is client-side token deletion and/or server-side token blacklisting).
async function httpLogoutUser(req, res) {
  // If using server-side sessions or a token blacklist, logic would go here.
  // Otherwise, the client is responsible for clearing the token.
  // logEvents(`User logged out: ${req.user?.id || 'Unknown user'}`, 'authLog.txt');
  return res
    .status(200)
    .json({
      message: "Logout successful. Please clear your token on the client side.",
    });
}

// Handles simple user subscription (essentially a minimal registration with 'subscriber' role).
async function httpSubscribeUser(req, res) {
  const { email, username } = req.body; // Username can be optional here.

  if (!email) {
    // Email is mandatory for subscription.
    return res
      .status(400)
      .json({ error: "Email is required for subscription." });
  }

  try {
    const existingUser = await User.findOne({ email: email.toLowerCase() }); // Check if the email is already in use.
    if (existingUser) {
      // If exists and is a subscriber, just confirm.
      // If has a different role, it might be an attempt to re-subscribe an already registered user.
      if (existingUser.role === "subscriber") {
        return res
          .status(200)
          .json({
            message: "You are already subscribed.",
            user: { email: existingUser.email },
          });
      } else {
        return res
          .status(409)
          .json({
            error:
              "This email is already registered with a different account type.",
          });
      }
    }

    // Username can be uniquely generated, or the provided one, or part of the email if not given.
    const finalUsername = username || `user_${Date.now()}`; // Ensure uniqueness if schema requires it.

    // Check if the generated/provided username is already taken.
    if (username) {
      // Only check if a username was provided.
      const existingUserByUsername = await User.findOne({
        username: finalUsername,
      });
      if (existingUserByUsername) {
        return res
          .status(409)
          .json({
            error:
              "Username already taken. Please choose another or leave blank for auto-generation.",
          });
      }
    }

    const newSubscriber = new User({
      // Creates a new user document with 'subscriber' role.
      username: finalUsername, // Or other strategy for unique username if schema marks it as unique.
      email: email.toLowerCase(),
      role: "subscriber",
      // Password is not required for 'subscriber' role based on the schema.
    });

    const savedSubscriber = await newSubscriber.save(); // Saves the new subscriber.

    return res.status(201).json({
      message: "Successfully subscribed!",
      user: {
        email: savedSubscriber.email,
        username: savedSubscriber.username,
      },
    });
  } catch (error) {
    console.error("Subscription error:", error);
    //logEvents(`Subscription Error: ${error.message}`, 'errorLog.txt');
    if (
      error.code === 11000 ||
      (error.message && error.message.includes("duplicate key"))
    ) {
      // Handles MongoDB duplicate key error.
      return res
        .status(409)
        .json({ error: "This email or username is already in use." });
    }
    if (error.name === "ValidationError") {
      // Handles Mongoose validation errors.
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "Server error during subscription." });
  }
}

module.exports = {
  httpRegisterNewUser,
  httpLoginUser,
  httpLogoutUser,
  httpSubscribeUser,
};