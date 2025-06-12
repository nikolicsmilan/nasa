// src/routes/users/users.router.js
const express = require('express');
 const usersController = require('./users.controller'); // To be imported when the controller is ready
// const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware'); // Placeholder for future authentication and authorization middlewares

// Creates a new Express router instance for user-related routes.
// By default, Express routing is not strict (strict routing is disabled).
// This means paths like '/users/profile' and '/users/profile/' would typically be treated as the same route by this router.
// If strict routing were enabled (e.g., const usersRouter = express.Router({ strict: true });),
// then a trailing slash would make a difference, and '/profile' would not match a handler for '/profile/'.
const usersRouter = express.Router();

// === Public Endpoints (no authentication required yet) ===

// POST /api/users/register - New user registration (can be 'subscriber' or 'commenter', etc.)
usersRouter.post('/register', (req, res) => {
  // Placeholder: Call usersController.httpRegisterNewUser will be here
  console.log('POST /api/users/register - User registration endpoint hit');
  res.status(501).json({ message: 'User registration not yet implemented.' });
});

// POST /api/users/login - User login
usersRouter.post('/login', (req, res) => {
  // Placeholder: Call usersController.httpLoginUser will be here
  console.log('POST /api/users/login - User login endpoint hit');
  res.status(501).json({ message: 'User login not yet implemented.' });
});

// POST /api/users/subscribe - Simple subscription (creates a 'subscriber' role user)
usersRouter.post('/subscribe', usersController.httpSubscribeUser);

// === Authenticated Endpoints ===
// These endpoints will require an `authenticateToken` middleware in the future.
// Example: usersRouter.get('/profile', authenticateToken, usersController.httpGetUserProfile);

// GET /api/users/profile - Get logged-in user's profile
usersRouter.get('/profile', (req, res) => {
  // Placeholder: Call usersController.httpGetUserProfile will be here
  // Will need middleware to extract user ID from token (e.g., req.user)
  console.log('GET /api/users/profile - Get user profile endpoint hit');
  res.status(501).json({ message: 'Get user profile not yet implemented.' });
});

// PUT /api/users/profile - Update logged-in user's profile
usersRouter.put('/profile', (req, res) => {
  // Placeholder: Call usersController.httpUpdateUserProfile will be here
  console.log('PUT /api/users/profile - Update user profile endpoint hit');
  res.status(501).json({ message: 'Update user profile not yet implemented.' });
});

// POST /api/users/logout - User logout (if using server-side session/token invalidation)
usersRouter.post('/logout', (req, res) => {
    // Placeholder: Call usersController.httpLogoutUser will be here
    console.log('POST /api/users/logout - User logout endpoint hit');
    res.status(501).json({ message: 'User logout not yet implemented.' });
});


// === Admin Endpoints ===
// These endpoints will require `authenticateToken` AND `authorizeRoles('admin', 'moderator')` (or just 'admin') middleware.
// Example: usersRouter.get('/', authenticateToken, authorizeRoles('admin'), usersController.httpGetAllUsers);

// GET /api/users - List all users (admin only)
usersRouter.get('/', usersController.httpGetAllUsers);

// GET /api/users/:id - Get a specific user by ID (admin only)
usersRouter.get('/:id', (req, res) => {
  // Placeholder: Call usersController.httpGetUserById will be here
  const userId = req.params.id;
  console.log(`GET /api/users/${userId} - Get user by ID endpoint hit (admin only)`);
  res.status(501).json({ message: `Get user by ID (${userId}) not yet implemented (admin only).` });
});

// PUT /api/users/:id - Update user details by admin (e.g., role)
usersRouter.put('/:id', (req, res) => {
  // Placeholder: Call usersController.httpUpdateUserById will be here
  const userId = req.params.id;
  console.log(`PUT /api/users/${userId} - Update user by ID endpoint hit (admin only)`);
  res.status(501).json({ message: `Update user by ID (${userId}) not yet implemented (admin only).` });
});

// DELETE /api/users/:id - Delete a user by admin
usersRouter.delete('/:id', (req, res) => {
  // Placeholder: Call usersController.httpDeleteUserById will be here
  const userId = req.params.id;
  console.log(`DELETE /api/users/${userId} - Delete user by ID endpoint hit (admin only)`);
  res.status(501).json({ message: `Delete user by ID (${userId}) not yet implemented (admin only).` });
});


module.exports = usersRouter;