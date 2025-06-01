const express = require('express');
// const usersController = require('../controllers/users.controller'); // Ezt majd be kell importálni, ha kész a controller
// const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware'); // Feltételezett middleware-ek

const usersRouter = express.Router();

// === Publikus Végpontok (nincs szükség authentikációra) ===

// POST /api/users/register - Új felhasználó regisztrációja (lehet 'subscriber' vagy 'commenter' is)
usersRouter.post('/register', (req, res) => {
  // Ide jön majd a usersController.httpRegisterNewUser hívása
  console.log('POST /api/users/register - User registration endpoint hit');
  res.status(501).json({ message: 'User registration not yet implemented.' });
});

// POST /api/users/login - Felhasználó bejelentkezése
usersRouter.post('/login', (req, res) => {
  // Ide jön majd a usersController.httpLoginUser hívása
  console.log('POST /api/users/login - User login endpoint hit');
  res.status(501).json({ message: 'User login not yet implemented.' });
});

// POST /api/users/subscribe - Egyszerű feliratkozás (ha külön végpontot akarsz a csak email alapú feliratkozáshoz)
// Ez létrehoz egy 'subscriber' role-ú usert.
usersRouter.post('/subscribe', (req, res) => {
  // Ide jön majd a usersController.httpSubscribeUser hívása (ami lényegében egy minimális regisztráció)
  console.log('POST /api/users/subscribe - User subscription endpoint hit');
  res.status(501).json({ message: 'User subscription not yet implemented.' });
});


// === Authentikációt Igénylő Végpontok ===
// Ezekhez a végpontokhoz a jövőben egy `authenticateToken` middleware-t kell majd hozzáadni.
// Például: usersRouter.get('/profile', authenticateToken, usersController.httpGetUserProfile);

// GET /api/users/profile - Bejelentkezett felhasználó profiljának lekérése
usersRouter.get('/profile', (req, res) => {
  // Ide jön majd a usersController.httpGetUserProfile hívása
  // Szükség lesz egy middleware-re, ami a tokenből kinyeri a felhasználó ID-ját (req.user)
  console.log('GET /api/users/profile - Get user profile endpoint hit');
  res.status(501).json({ message: 'Get user profile not yet implemented.' });
});

// PUT /api/users/profile - Bejelentkezett felhasználó profiljának frissítése
usersRouter.put('/profile', (req, res) => {
  // Ide jön majd a usersController.httpUpdateUserProfile hívása
  console.log('PUT /api/users/profile - Update user profile endpoint hit');
  res.status(501).json({ message: 'Update user profile not yet implemented.' });
});

// POST /api/users/logout - Kijelentkezés (ha szerveroldali session/token invalidálást használsz)
usersRouter.post('/logout', (req, res) => {
    // Ide jön majd a usersController.httpLogoutUser hívása
    console.log('POST /api/users/logout - User logout endpoint hit');
    res.status(501).json({ message: 'User logout not yet implemented.' });
});


// === Adminisztrátori Végpontok ===
// Ezekhez a végpontokhoz `authenticateToken` ÉS `authorizeRoles('admin', 'moderator')` (vagy csak 'admin') middleware kell majd.
// Például: usersRouter.get('/', authenticateToken, authorizeRoles('admin'), usersController.httpGetAllUsers);

// GET /api/users - Összes felhasználó listázása (csak adminnak)
usersRouter.get('/', (req, res) => {
  // Ide jön majd a usersController.httpGetAllUsers hívása
  console.log('GET /api/users - Get all users endpoint hit (admin only)');
  res.status(501).json({ message: 'Get all users not yet implemented (admin only).' });
});

// GET /api/users/:id - Egy konkrét felhasználó lekérése ID alapján (csak adminnak)
usersRouter.get('/:id', (req, res) => {
  // Ide jön majd a usersController.httpGetUserById hívása
  const userId = req.params.id;
  console.log(`GET /api/users/${userId} - Get user by ID endpoint hit (admin only)`);
  res.status(501).json({ message: `Get user by ID (${userId}) not yet implemented (admin only).` });
});

// PUT /api/users/:id - Felhasználó adatainak frissítése admin által (pl. role)
usersRouter.put('/:id', (req, res) => {
  // Ide jön majd a usersController.httpUpdateUserById hívása
  const userId = req.params.id;
  console.log(`PUT /api/users/${userId} - Update user by ID endpoint hit (admin only)`);
  res.status(501).json({ message: `Update user by ID (${userId}) not yet implemented (admin only).` });
});

// DELETE /api/users/:id - Felhasználó törlése admin által
usersRouter.delete('/:id', (req, res) => {
  // Ide jön majd a usersController.httpDeleteUserById hívása
  const userId = req.params.id;
  console.log(`DELETE /api/users/${userId} - Delete user by ID endpoint hit (admin only)`);
  res.status(501).json({ message: `Delete user by ID (${userId}) not yet implemented (admin only).` });
});


module.exports = usersRouter;