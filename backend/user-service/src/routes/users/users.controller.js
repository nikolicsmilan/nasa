const User = require('../models/users.mongo'); // Importáljuk a User Mongoose modellt
// const jwt = require('jsonwebtoken'); // Ezt majd importálni kell a token generáláshoz és validáláshoz
// const { logEvents } = require('../middlewares/logEvents'); // Ha használni akarod a logolást itt is

// Segédfüggvény a válaszok egységesítéséhez (opcionális, de hasznos lehet)
// function sendSuccess(res, statusCode, data, message) {
//   res.status(statusCode).json({ success: true, message, data });
// }
// function sendError(res, statusCode, message, errorDetails = null) {
//   logEvents(`${statusCode} - ${message} - ${errorDetails ? JSON.stringify(errorDetails) : ''}`, 'errorLog.txt');
//   res.status(statusCode).json({ success: false, message, error: errorDetails });
// }

// === Publikus Végpontok Kezelői ===

// Új felhasználó regisztrációja (lehet 'subscriber' vagy 'commenter' is alapértelmezésben)
async function httpRegisterNewUser(req, res) {
  const { username, email, password, role } = req.body; // A 'role' opcionális, alapértelmezetten 'subscriber' lesz a sémában

  // Alapvető validáció (ezt érdemes egy validációs middleware-be vagy library-be szervezni később)
  if (!username || !email) { // Jelszó csak akkor kötelező, ha nem subscriber
    return res.status(400).json({ error: 'Username and email are required.' });
  }
  if (role && !['subscriber', 'commenter', 'visitor_hr', 'moderator', 'admin'].includes(role)) {
    return res.status(400).json({ error: 'Invalid role specified.' });
  }
  // Jelszó ellenőrzése, ha a szerepkör megköveteli (a séma required function-je ezt már kezeli, de itt is lehet plusz ellenőrzés)
  if (!['subscriber', 'visitor_hr'].includes(role || 'subscriber') && !password) {
    return res.status(400).json({ error: 'Password is required for this role.' });
  }


  try {
    // Ellenőrizzük, létezik-e már felhasználó ezzel az emaillel vagy felhasználónévvel
    const existingUserByEmail = await User.findOne({ email: email.toLowerCase() });
    if (existingUserByEmail) {
      return res.status(409).json({ error: 'Email address already in use.' }); // 409 Conflict
    }
    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return res.status(409).json({ error: 'Username already taken.' });
    }

    const newUser = new User({
      username,
      email: email.toLowerCase(),
      password, // A jelszó hash-elése a 'pre.save' hook-ban történik a modellen
      role: role || 'subscriber', // Ha nincs role megadva, alapértelmezetten subscriber
    });

    const savedUser = await newUser.save();

    // Sikeres regisztráció után nem küldjük vissza a jelszót!
    const userResponse = {
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      role: savedUser.role,
      createdAt: savedUser.createdAt,
    };

    // TODO: Opcionálisan JWT token generálása és visszaküldése itt
    // const token = jwt.sign({ id: savedUser._id, role: savedUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // res.status(201).json({ user: userResponse, token });

    return res.status(201).json({ message: 'User registered successfully.', user: userResponse });
  } catch (error) {
    console.error('Registration error:', error);
    //logEvents(`Registration Error: ${error.message}`, 'errorLog.txt');
    if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Server error during registration.' });
  }
}

// Felhasználó bejelentkezése
async function httpLoginUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials. User not found.' }); // 401 Unauthorized
    }

    // Ellenőrizzük, hogy a felhasználó szerepköre engedélyezi-e a jelszavas bejelentkezést
    if (['subscriber', 'visitor_hr'].includes(user.role) && !user.password) {
        return res.status(403).json({ error: 'Login not applicable for this user type without a password.' }); // 403 Forbidden
    }


    const isMatch = await user.comparePassword(password); // A User modellen definiált metódus
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials. Password incorrect.' });
    }

    // Sikeres bejelentkezés
    // TODO: JWT token generálása és visszaküldése itt
    // const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const userResponse = { // Ne küldjük vissza a jelszót!
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

// Egyszerű feliratkozás (lényegében egy minimális regisztráció 'subscriber' szerepkörrel)
async function httpSubscribeUser(req, res) {
  const { email, username } = req.body; // Username opcionális lehet itt

  if (!email) {
    return res.status(400).json({ error: 'Email is required for subscription.' });
  }

  try {
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      // Ha már létezik, és subscriber, akkor csak egy üzenet
      // Ha más role-ja van, akkor is lehet, hogy csak egy "már regisztráltál" üzenet kell
      if (existingUser.role === 'subscriber') {
        return res.status(200).json({ message: 'You are already subscribed.', user: { email: existingUser.email } });
      } else {
        return res.status(409).json({ error: 'This email is already registered with a different account type.' });
      }
    }

    // A username lehet egyedi generált, vagy a megadott, vagy akár az email egy része, ha nincs megadva
    const finalUsername = username || `user_${Date.now()}`; // Biztosítani kell az egyediséget, ha a séma megköveteli

    // Ellenőrizzük, hogy a generált/megadott username nem foglalt-e már
    if (username) { // Csak akkor ellenőrizzük, ha megadtak username-et
        const existingUserByUsername = await User.findOne({ username: finalUsername });
        if (existingUserByUsername) {
            return res.status(409).json({ error: 'Username already taken. Please choose another or leave blank for auto-generation.' });
        }
    }


    const newSubscriber = new User({
      username: finalUsername, // Vagy más stratégia az egyedi felhasználónévre, ha a séma unique-nak jelöli
      email: email.toLowerCase(),
      role: 'subscriber',
      // Jelszó nem szükséges 'subscriber' role-hoz a séma alapján
    });

    const savedSubscriber = await newSubscriber.save();

    return res.status(201).json({
      message: 'Successfully subscribed!',
      user: { email: savedSubscriber.email, username: savedSubscriber.username },
    });
  } catch (error) {
    console.error('Subscription error:', error);
    //logEvents(`Subscription Error: ${error.message}`, 'errorLog.txt');
    if (error.code === 11000 || (error.message && error.message.includes('duplicate key'))) { // MongoDB duplicate key error
        return res.status(409).json({ error: 'This email or username is already in use.' });
    }
    if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Server error during subscription.' });
  }
}

// === Authentikációt Igénylő Végpontok Kezelői ===

// Bejelentkezett felhasználó profiljának lekérése
async function httpGetUserProfile(req, res) {
  // Feltételezzük, hogy az `authenticateToken` middleware a `req.user`-be teszi a felhasználó adatait (pl. ID)
  if (!req.user || !req.user.id) {
    return res.status(401).json({ error: 'Unauthorized. No user information in request.' });
  }
  try {
    const user = await User.findById(req.user.id).select('-password'); // A jelszót nem küldjük vissza
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

// Bejelentkezett felhasználó profiljának frissítése
async function httpUpdateUserProfile(req, res) {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ error: 'Unauthorized.' });
  }
  const { username, email, /* other updatable fields */ } = req.body;
  const updates = {};
  if (username) updates.username = username;
  if (email) updates.email = email.toLowerCase();
  // Jelszófrissítést külön végponton vagy speciális logikával érdemes kezelni

  if (Object.keys(updates).length === 0) {
    return res.status(400).json({ error: 'No update data provided.' });
  }

  try {
    // Ellenőrizzük, hogy az új email/username nem foglalt-e már MÁS felhasználó által
    if (updates.email) {
        const existingUser = await User.findOne({ email: updates.email, _id: { $ne: req.user.id } });
        if (existingUser) return res.status(409).json({ error: 'New email address is already in use by another account.' });
    }
    if (updates.username) {
        const existingUser = await User.findOne({ username: updates.username, _id: { $ne: req.user.id } });
        if (existingUser) return res.status(409).json({ error: 'New username is already taken by another account.' });
    }


    const updatedUser = await User.findByIdAndUpdate(req.user.id, updates, { new: true, runValidators: true }).select('-password');
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found for update.' });
    }
    return res.status(200).json({ message: 'Profile updated successfully.', user: updatedUser });
  } catch (error) {
    console.error('Update profile error:', error);
    //logEvents(`Update Profile Error: ${error.message}`, 'errorLog.txt');
    if (error.code === 11000 || (error.message && error.message.includes('duplicate key'))) {
        return res.status(409).json({ error: 'The new email or username is already in use.' });
    }
    if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Server error updating profile.' });
  }
}

// Kijelentkezés (placeholder - a tényleges logika a kliensoldali token törlés és/vagy szerveroldali token feketelista)
async function httpLogoutUser(req, res) {
    // Ha szerveroldali session-t vagy token feketelistát használsz, itt lenne a logika.
    // Egyébként a kliens törli a tokent.
    // logEvents(`User logged out: ${req.user?.id || 'Unknown user'}`, 'authLog.txt');
    return res.status(200).json({ message: 'Logout successful. Please clear your token on the client side.' });
}


// === Adminisztrátori Végpontok Kezelői ===
// Ezekhez majd kelleni fog `authorizeRoles` middleware

// Összes felhasználó listázása
async function httpGetAllUsers(req, res) {
  // TODO: Pagináció hozzáadása itt is hasznos lehet
  try {
    const users = await User.find({}).select('-password'); // Jelszavak nélkül
    return res.status(200).json(users);
  } catch (error) {
    console.error('Get all users error:', error);
    //logEvents(`Get All Users Error: ${error.message}`, 'errorLog.txt');
    return res.status(500).json({ error: 'Server error fetching all users.' });
  }
}

// Egy konkrét felhasználó lekérése ID alapján
async function httpGetUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(`Get user by ID (${id}) error:`, error);
    //logEvents(`Get User By ID Error: ${error.message}`, 'errorLog.txt');
    if (error.name === 'CastError') { // Érvénytelen ObjectId formátum
        return res.status(400).json({ error: 'Invalid user ID format.' });
    }
    return res.status(500).json({ error: 'Server error fetching user.' });
  }
}

// Felhasználó adatainak (pl. role) frissítése admin által
async function httpUpdateUserById(req, res) {
  const { id } = req.params;
  const { username, email, role, /* other fields admin can update */ } = req.body;

  const updates = {};
  if (username) updates.username = username;
  if (email) updates.email = email.toLowerCase();
  if (role) {
    if (!['subscriber', 'commenter', 'visitor_hr', 'moderator', 'admin'].includes(role)) {
      return res.status(400).json({ error: 'Invalid role specified.' });
    }
    updates.role = role;
  }
  // Jelszó frissítését admin által külön, nagyon biztonságos módon kell kezelni, vagy nem engedni közvetlenül.

  if (Object.keys(updates).length === 0) {
    return res.status(400).json({ error: 'No update data provided.' });
  }

  try {
    // Ellenőrizzük, hogy az új email/username nem foglalt-e már MÁS felhasználó által
    if (updates.email) {
        const existingUser = await User.findOne({ email: updates.email, _id: { $ne: id } });
        if (existingUser) return res.status(409).json({ error: 'New email address is already in use by another account.' });
    }
    if (updates.username) {
        const existingUser = await User.findOne({ username: updates.username, _id: { $ne: id } });
        if (existingUser) return res.status(409).json({ error: 'New username is already taken by another account.' });
    }

    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true, runValidators: true }).select('-password');
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found for update by admin.' });
    }
    return res.status(200).json({ message: 'User updated successfully by admin.', user: updatedUser });
  } catch (error) {
    console.error(`Admin update user (${id}) error:`, error);
    //logEvents(`Admin Update User Error: ${error.message}`, 'errorLog.txt');
    if (error.code === 11000 || (error.message && error.message.includes('duplicate key'))) {
        return res.status(409).json({ error: 'The new email or username is already in use.' });
    }
    if (error.name === 'ValidationError' || error.name === 'CastError') {
        return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Server error updating user by admin.' });
  }
}

// Felhasználó törlése admin által
async function httpDeleteUserById(req, res) {
  const { id } = req.params;
  try {
    // Fontos: Gondold át, mi történjen a felhasználóhoz kapcsolódó adatokkal (pl. kommentek, feliratkozások)
    // Lehet, hogy "soft delete"-et (pl. isActive: false) érdemesebb használni, mint tényleges törlést.
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found for deletion.' });
    }
    // logEvents(`User deleted by admin: ${id}, Admin: ${req.user?.id || 'Unknown'}`, 'adminActionsLog.txt');
    return res.status(200).json({ message: 'User deleted successfully by admin.' });
  } catch (error) {
    console.error(`Admin delete user (${id}) error:`, error);
    //logEvents(`Admin Delete User Error: ${error.message}`, 'errorLog.txt');
    if (error.name === 'CastError') {
        return res.status(400).json({ error: 'Invalid user ID format.' });
    }
    return res.status(500).json({ error: 'Server error deleting user by admin.' });
  }
}


module.exports = {
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