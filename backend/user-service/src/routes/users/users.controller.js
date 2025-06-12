// src/routes/users/users.controller.js
const User = require('../../models/users.mongo'); // Imports the User Mongoose model.
// const jwt = require('jsonwebtoken'); // To be imported later for JWT generation and validation.
// const { logEvents } = require('../middlewares/logEvents'); // If you intend to use logging here.

// Helper function for standardized responses (optional, but can be useful)
// function sendSuccess(res, statusCode, data, message) {
//   res.status(statusCode).json({ success: true, message, data });
// }
// function sendError(res, statusCode, message, errorDetails = null) {
//   logEvents(`${statusCode} - ${message} - ${errorDetails ? JSON.stringify(errorDetails) : ''}`, 'errorLog.txt');
//   res.status(statusCode).json({ success: false, message, error: errorDetails });
// }

// === Public Endpoint Handlers ===

// Handles new user registration (can be 'subscriber', 'commenter', etc. by default via schema).
async function httpRegisterNewUser(req, res) {
  const { username, email, password, role } = req.body; // 'role' is optional; defaults to 'subscriber' in the schema.

  // Basic validation (consider a validation middleware or library for more complex scenarios).
  if (!username || !email) { // Password is only required if not a 'subscriber'.
    return res.status(400).json({ error: 'Username and email are required.' });
  }
  if (role && !['subscriber', 'commenter', 'visitor_hr', 'moderator', 'admin'].includes(role)) { // Validates the provided role.
    return res.status(400).json({ error: 'Invalid role specified.' });
  }
  // Password check if the role requires it (schema's required function handles this, but extra check here is fine).
  if (!['subscriber', 'visitor_hr'].includes(role || 'subscriber') && !password) {
    return res.status(400).json({ error: 'Password is required for this role.' });
  }

  try {
    // Check if a user with this email or username already exists.
    const existingUserByEmail = await User.findOne({ email: email.toLowerCase() });
    if (existingUserByEmail) {
      return res.status(409).json({ error: 'Email address already in use.' }); // 409 Conflict.
    }
    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return res.status(409).json({ error: 'Username already taken.' });
    }

    const newUser = new User({ // Creates a new User instance.
      username,
      email: email.toLowerCase(),
      password, // Password hashing occurs in the 'pre.save' hook within the User model.
      role: role || 'subscriber', // Defaults to 'subscriber' if no role is provided.
    });

    const savedUser = await newUser.save(); // Saves the new user to the database.

    // Do not send the password back in the response after successful registration!
    const userResponse = {
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      role: savedUser.role,
      createdAt: savedUser.createdAt,
    };

    // TODO: Optionally generate and return a JWT token here.
    // const token = jwt.sign({ id: savedUser._id, role: savedUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // return res.status(201).json({ message: 'User registered successfully.', user: userResponse, token });

    return res.status(201).json({ message: 'User registered successfully.', user: userResponse });
  } catch (error) {
    console.error('Registration error:', error); // Logs the error to the console.
    //logEvents(`Registration Error: ${error.message}`, 'errorLog.txt'); // Example of custom logging.
    if (error.name === 'ValidationError') { // Handles Mongoose validation errors.
        return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Server error during registration.' }); // Generic server error.
  }
}

// Handles user login.
async function httpLoginUser(req, res) {
  const { email, password } = req.body; // Extracts email and password from the request body.

  if (!email || !password) { // Validates that both email and password are provided.
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    const user = await User.findOne({ email: email.toLowerCase() }); // Finds the user by email.
    if (!user) { // If user is not found.
      return res.status(401).json({ error: 'Invalid credentials. User not found.' }); // 401 Unauthorized.
    }

    // Check if the user's role allows password-based login.
    if (['subscriber', 'visitor_hr'].includes(user.role) && !user.password) {
        return res.status(403).json({ error: 'Login not applicable for this user type without a password.' }); // 403 Forbidden.
    }

    const isMatch = await user.comparePassword(password); // Compares the provided password with the stored hashed password using the method defined on the User model.
    if (!isMatch) { // If passwords do not match.
      return res.status(401).json({ error: 'Invalid credentials. Password incorrect.' });
    }

    // Successful login.
    // TODO: Generate and return a JWT token here.
    // const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const userResponse = { // Prepare user data for the response, excluding the password.
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
    };

    // return res.status(200).json({ message: 'Login successful.', user: userResponse, token });
    return res.status(200).json({ message: 'Login successful.', user: userResponse });

  } catch (error) {
    console.error('Login error:', error);
    //logEvents(`Login Error: ${error.message}`, 'errorLog.txt');
    return res.status(500).json({ error: 'Server error during login.' });
  }
}

// Handles simple user subscription (essentially a minimal registration with 'subscriber' role).
async function httpSubscribeUser(req, res) {

  const { email, username } = req.body;

  // --- IDEIGLENES, HARDCODE-OLT VÁLASZ ---
  // A Postman és a Frontend teszteléséhez, amíg nincs adatbázis.
  
  // Ellenőrizzük, hogy a kérésből megkaptuk-e az adatokat.
  if (!email || !username) {
    return res.status(400).json({ error: 'Username and email are required for the test.' });
  }

  console.log(`[MOCK] Received subscription for user: ${username}, email: ${email}`);

  // Küldünk egy sikeres, de ál-választ.
  return res.status(201).json({
    message: '[MOCK] Successfully subscribed!',
    user: {
      email: email,
      username: username,
    },
  });



/*
  const { email, username } = req.body; // Username can be optional here.

  if (!email) { // Email is mandatory for subscription.
    return res.status(400).json({ error: 'Email is required for subscription.' });
  }

  try {
    const existingUser = await User.findOne({ email: email.toLowerCase() }); // Check if the email is already in use.
    if (existingUser) {
      // If exists and is a subscriber, just confirm.
      // If has a different role, it might be an attempt to re-subscribe an already registered user.
      if (existingUser.role === 'subscriber') {
        return res.status(200).json({ message: 'You are already subscribed.', user: { email: existingUser.email } });
      } else {
        return res.status(409).json({ error: 'This email is already registered with a different account type.' });
      }
    }

    // Username can be uniquely generated, or the provided one, or part of the email if not given.
    const finalUsername = username || `user_${Date.now()}`; // Ensure uniqueness if schema requires it.

    // Check if the generated/provided username is already taken.
    if (username) { // Only check if a username was provided.
        const existingUserByUsername = await User.findOne({ username: finalUsername });
        if (existingUserByUsername) {
            return res.status(409).json({ error: 'Username already taken. Please choose another or leave blank for auto-generation.' });
        }
    }

    const newSubscriber = new User({ // Creates a new user document with 'subscriber' role.
      username: finalUsername, // Or other strategy for unique username if schema marks it as unique.
      email: email.toLowerCase(),
      role: 'subscriber',
      // Password is not required for 'subscriber' role based on the schema.
    });

    const savedSubscriber = await newSubscriber.save(); // Saves the new subscriber.

    return res.status(201).json({
      message: 'Successfully subscribed!',
      user: { email: savedSubscriber.email, username: savedSubscriber.username },
    });
  } catch (error) {
    console.error('Subscription error:', error);
    //logEvents(`Subscription Error: ${error.message}`, 'errorLog.txt');
    if (error.code === 11000 || (error.message && error.message.includes('duplicate key'))) { // Handles MongoDB duplicate key error.
        return res.status(409).json({ error: 'This email or username is already in use.' });
    }
    if (error.name === 'ValidationError') { // Handles Mongoose validation errors.
        return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Server error during subscription.' });
  }






  */
}

// === Authenticated Endpoint Handlers ===

// Gets the profile of the logged-in user.
async function httpGetUserProfile(req, res) {
  // Assumes an `authenticateToken` middleware places user data (e.g., ID) into `req.user`.
  if (!req.user || !req.user.id) {
    return res.status(401).json({ error: 'Unauthorized. No user information in request.' });
  }
  try {
    const user = await User.findById(req.user.id).select('-password'); // Fetches user by ID, excludes password.
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error('Get profile error:', error);
    //logEvents(`Get Profile Error: ${error.message}`, 'errorLog.txt');
    return res.status(500).json({ error: 'Server error fetching profile.' });
  }
}

// Updates the profile of the logged-in user.
async function httpUpdateUserProfile(req, res) {
  if (!req.user || !req.user.id) { // Ensures user is authenticated.
    return res.status(401).json({ error: 'Unauthorized.' });
  }
  const { username, email /* other updatable fields */ } = req.body; // Gets updatable fields from request body.
  const updates = {}; // Object to hold fields to be updated.
  if (username) updates.username = username;
  if (email) updates.email = email.toLowerCase();
  // Password updates should be handled via a separate endpoint or with special logic (e.g., current password confirmation).

  if (Object.keys(updates).length === 0) { // If no data to update is provided.
    return res.status(400).json({ error: 'No update data provided.' });
  }

  try {
    // Check if the new email/username is already in use by ANOTHER user.
    if (updates.email) {
        const existingUser = await User.findOne({ email: updates.email, _id: { $ne: req.user.id } }); // $ne: not equal to current user's ID.
        if (existingUser) return res.status(409).json({ error: 'New email address is already in use by another account.' });
    }
    if (updates.username) {
        const existingUser = await User.findOne({ username: updates.username, _id: { $ne: req.user.id } });
        if (existingUser) return res.status(409).json({ error: 'New username is already taken by another account.' });
    }

    // Finds user by ID, updates it, returns the new version, and runs validators. Excludes password.
    const updatedUser = await User.findByIdAndUpdate(req.user.id, updates, { new: true, runValidators: true }).select('-password');
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found for update.' });
    }
    return res.status(200).json({ message: 'Profile updated successfully.', user: updatedUser });
  } catch (error) {
    console.error('Update profile error:', error);
    //logEvents(`Update Profile Error: ${error.message}`, 'errorLog.txt');
    if (error.code === 11000 || (error.message && error.message.includes('duplicate key'))) { // Handles duplicate key errors for unique fields.
        return res.status(409).json({ error: 'The new email or username is already in use.' });
    }
    if (error.name === 'ValidationError') { // Handles Mongoose validation errors.
        return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Server error updating profile.' });
  }
}

// Handles user logout (placeholder - actual logic is client-side token deletion and/or server-side token blacklisting).
async function httpLogoutUser(req, res) {
    // If using server-side sessions or a token blacklist, logic would go here.
    // Otherwise, the client is responsible for clearing the token.
    // logEvents(`User logged out: ${req.user?.id || 'Unknown user'}`, 'authLog.txt');
    return res.status(200).json({ message: 'Logout successful. Please clear your token on the client side.' });
}


// === Administrator Endpoint Handlers ===
// These will require an `authorizeRoles` middleware in the future.

// Lists all users (admin only).
async function httpGetAllUsers(req, res) {
  // TODO: Pagination could be useful here for large numbers of users.
  try {
    const users = await User.find({}).select('-password'); // Fetches all users, excluding their passwords.
    return res.status(200).json(users);
  } catch (error) {
    console.error('Get all users error:', error);
    //logEvents(`Get All Users Error: ${error.message}`, 'errorLog.txt');
    return res.status(500).json({ error: 'Server error fetching all users.' });
  }
}

// Gets a specific user by ID (admin only).
async function httpGetUserById(req, res) {
  const { id } = req.params; // Extracts user ID from route parameters.
  try {
    const user = await User.findById(id).select('-password'); // Finds user by ID, excludes password.
    if (!user) { // If user not found.
      return res.status(404).json({ error: 'User not found.' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(`Get user by ID (${id}) error:`, error);
    //logEvents(`Get User By ID Error: ${error.message}`, 'errorLog.txt');
    if (error.name === 'CastError') { // Handles invalid ObjectId format for ID.
        return res.status(400).json({ error: 'Invalid user ID format.' });
    }
    return res.status(500).json({ error: 'Server error fetching user.' });
  }
}

// Updates user details (e.g., role) by an admin.
async function httpUpdateUserById(req, res) {
  const { id } = req.params; // User ID to update.
  const { username, email, role /* other fields admin can update */ } = req.body; // Data for update.

  const updates = {}; // Object to hold fields to be updated.
  if (username) updates.username = username;
  if (email) updates.email = email.toLowerCase();
  if (role) { // If role is being updated.
    if (!['subscriber', 'commenter', 'visitor_hr', 'moderator', 'admin'].includes(role)) { // Validates role.
      return res.status(400).json({ error: 'Invalid role specified.' });
    }
    updates.role = role;
  }
  // Admin password updates should be handled with extreme care, possibly a separate, more secure process, or not allowed directly.

  if (Object.keys(updates).length === 0) { // If no data provided for update.
    return res.status(400).json({ error: 'No update data provided.' });
  }

  try {
    // Check if the new email/username is already in use by ANOTHER user.
    if (updates.email) {
        const existingUser = await User.findOne({ email: updates.email, _id: { $ne: id } }); // $ne: not equal to the ID being updated.
        if (existingUser) return res.status(409).json({ error: 'New email address is already in use by another account.' });
    }
    if (updates.username) {
        const existingUser = await User.findOne({ username: updates.username, _id: { $ne: id } });
        if (existingUser) return res.status(409).json({ error: 'New username is already taken by another account.' });
    }

    // Finds user by ID, updates, returns new version, runs validators, excludes password.
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true, runValidators: true }).select('-password');
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found for update by admin.' });
    }
    return res.status(200).json({ message: 'User updated successfully by admin.', user: updatedUser });
  } catch (error) {
    console.error(`Admin update user (${id}) error:`, error);
    //logEvents(`Admin Update User Error: ${error.message}`, 'errorLog.txt');
    if (error.code === 11000 || (error.message && error.message.includes('duplicate key'))) { // Handles duplicate key errors.
        return res.status(409).json({ error: 'The new email or username is already in use.' });
    }
    if (error.name === 'ValidationError' || error.name === 'CastError') { // Handles validation or invalid ID format errors.
        return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Server error updating user by admin.' });
  }
}

// Deletes a user by an admin.
async function httpDeleteUserById(req, res) {
  const { id } = req.params; // User ID to delete.
  try {
    // Important: Consider what happens to data associated with the user (e.g., comments, subscriptions).
    // A "soft delete" (e.g., setting an `isActive: false` flag) might be preferable to actual deletion.
    const deletedUser = await User.findByIdAndDelete(id); // Deletes the user by ID.
    if (!deletedUser) { // If user not found.
      return res.status(404).json({ error: 'User not found for deletion.' });
    }
    // logEvents(`User deleted by admin: ${id}, Admin: ${req.user?.id || 'Unknown'}`, 'adminActionsLog.txt');
    return res.status(200).json({ message: 'User deleted successfully by admin.' });
  } catch (error) {
    console.error(`Admin delete user (${id}) error:`, error);
    //logEvents(`Admin Delete User Error: ${error.message}`, 'errorLog.txt');
    if (error.name === 'CastError') { // Handles invalid ID format.
        return res.status(400).json({ error: 'Invalid user ID format.' });
    }
    return res.status(500).json({ error: 'Server error deleting user by admin.' });
  }
}

module.exports = { // Exports all handler functions to be used by the router.
  httpRegisterNewUser,
  httpLoginUser,
  httpSubscribeUser,
  httpGetUserProfile,
  httpUpdateUserProfile,
  httpLogoutUser,
  httpGetAllUsers,
  httpGetUserById,
  httpUpdateUserById,
  httpDeleteUserById,
};