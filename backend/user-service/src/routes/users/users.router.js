// src/routes/users/users.router.js

const express = require('express');

// Az új, szétbontott controllerek importálása
const authController = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');
const adminController = require('./controllers/admin.controller');

// const { authenticateToken, authorizeRoles } = require('../../middlewares/authMiddleware'); // A jövőbeli middleware-ek helye

const usersRouter = express.Router();

// === Public Endpoints ===
usersRouter.post('/register', authController.httpRegisterNewUser);
usersRouter.post('/login', authController.httpLoginUser);
usersRouter.post('/subscribe', authController.httpSubscribeUser);

// === Authenticated Endpoints ===
// A middleware-eket később ide kell majd beszúrni
usersRouter.get('/profile', /* authenticateToken, */ userController.httpGetUserProfile);
usersRouter.put('/profile', /* authenticateToken, */ userController.httpUpdateUserProfile);
usersRouter.post('/logout', authController.httpLogoutUser);

// === Admin Endpoints ===
// A middleware-eket később ide kell majd beszúrni
usersRouter.get('/', /* authenticateToken, authorizeRoles('admin'), */ adminController.httpGetAllUsers);
usersRouter.get('/:id', /* authenticateToken, authorizeRoles('admin'), */ adminController.httpGetUserById);
usersRouter.put('/:id', /* authenticateToken, authorizeRoles('admin'), */ adminController.httpUpdateUserById);
usersRouter.delete('/:id', /* authenticateToken, authorizeRoles('admin'), */ adminController.httpDeleteUserById);

module.exports = usersRouter;