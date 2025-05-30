const mongoose = require("mongoose"); // Behúzza a Mongoose könyvtárat, ami egy ODM (Object Data Modeling) könyvtár MongoDB-hez Node.js-ben.
const bcrypt = require('bcrypt'); // Behúzza a bcrypt könyvtárat jelszavak biztonságos hash-eléséhez.

const userSchema = new mongoose.Schema({ // Létrehoz egy új Mongoose sémát a felhasználói adatok struktúrájának definiálásához.
  username: { // Felhasználónév mező definíciója.
    type: String, // A mező típusa string (szöveg).
    required: [true, 'Username is required'], // Kötelező mező; ha hiányzik, a megadott hibaüzenetet adja.
    unique: true, // Biztosítja, hogy minden felhasználónév egyedi legyen az adatbázisban.
    trim: true, // Eltávolítja a felesleges szóközöket a string elejéről és végéről.
  },
  email: { // Email cím mező definíciója.
    type: String, // A mező típusa string.
    required: [true, 'Email is required'], // Kötelező mező.
    unique: true, // Biztosítja, hogy minden email cím egyedi legyen.
    trim: true, // Eltávolítja a felesleges szóközöket.
    lowercase: true, // Az email címet automatikusan kisbetűssé alakítja mentés előtt.
    match: [/.+\@.+\..+/, 'Please fill a valid email address'], // Reguláris kifejezés az email formátumának alapvető ellenőrzésére.
  },
  password: { // Jelszó mező definíciója.
    type: String, // A mező típusa string (a hash-elt jelszót tárolja majd).
    // A 'required' itt egy függvény, ami dinamikusan dönti el a kötelezőséget a 'role' alapján.
    required: function() { // Ez egy Mongoose séma validációs függvény.
        // A `this` kulcsszó ebben a kontextusban arra a DOKUMENTUMRA (user objektumra) vonatkozik,
        // amelyet éppen validálnak vagy mentenek. Tehát `this.role` az adott user dokumentum 'role' mezőjének értékét adja.
        return !['subscriber', 'visitor_hr'].includes(this.role); // Akkor kötelező a jelszó, ha a user szerepköre NEM 'subscriber' ÉS NEM 'visitor_hr'.
      },
    minlength: 6, // Meghatározza, hogy a jelszónak legalább 6 karakter hosszúnak kell lennie (ez a plain text jelszóra vonatkozik a hash-elés előtt).
  },
  role: { // Felhasználói szerepkör mező definíciója.
    type: String, // A mező típusa string.
    enum: ['subscriber', 'commenter', 'visitor_hr', 'moderator', 'admin'], // Meghatározza az elfogadható értékek listáját a szerepkörhöz.
    required: true, // Kötelező mező.
    default: 'subscriber', // Alapértelmezett érték, ha nincs megadva; új felhasználók 'subscriber'-ként jönnek létre.
  },
  registrationDate: { // Regisztráció dátuma mező.
    type: Date, // A mező típusa dátum.
    default: Date.now, // Alapértelmezett érték a jelenlegi dátum és idő, amikor a dokumentum létrejön.
  },
  // Egyéb potenciális mezők itt lehetnének, pl. lastLogin, profilePicture, stb.
  // ...
}, { timestamps: true }); // Mongoose opció: automatikusan hozzáad `createdAt` és `updatedAt` mezőket minden dokumentumhoz.

// Mongoose middleware, ami a 'save' esemény ELŐTT (pre) fut le.
// Jelszó hash-elése mentés előtt, de csak akkor, ha a jelszó mező módosult.
userSchema.pre('save', async function (next) { // Az `async function` itt azért fontos, mert `await`-et használunk benne.
                                            // A `function` kulcsszó használata (nem arrow function) biztosítja, hogy a `this` helyesen kötődjön.
  // A `this` kulcsszó ebben a `pre('save')` hook-ban arra a Mongoose DOKUMENTUMRA mutat,
  // amelyet éppen menteni készülünk az adatbázisba.
  if (!this.isModified('password')) { // Ellenőrzi, hogy a 'password' mező módosult-e ezen mentési kísérlet során.
                                      // Ha nem módosult (pl. csak az emailt frissítjük), akkor nem kell újra hash-elni.
    return next(); // Továbbengedi a mentési folyamatot a következő middleware-re vagy a tényleges mentésre.
  }
  try { // Hibakezelés a hash-elési folyamathoz.
    const salt = await bcrypt.genSalt(10); // Generál egy "sót" a hash-eléshez (10 a költségfaktor, ami meghatározza a hash erősségét).
    // A `this.password` itt az éppen menteni kívánt user dokumentum (még plain text) jelszavára utal.
    // Ezt a plain text jelszót hash-eljük a generált sóval.
    this.password = await bcrypt.hash(this.password, salt); // A dokumentum 'password' mezőjét felülírja a hash-elt jelszóval.
    return next(); // Továbbengedi a mentési folyamatot.
  } catch (error) { // Ha hiba történik a hash-elés közben.
    return next(error); // Továbbadja a hibát a Mongoose hibakezelőjének.
  }
});

// Egyedi metódus hozzáadása a userSchema-hoz a jelszó összehasonlítására.
// Ezt a metódust majd a User modell példányain lehet meghívni.
userSchema.methods.comparePassword = async function (candidatePassword) { // Az `async function` itt is az `await` miatt kell.
                                                                      // A `function` kulcsszó itt is a `this` helyes kötődése miatt fontos.
  // A `this` kulcsszó ebben az instance metódusban arra a konkrét User DOKUMENTUM PÉLDÁNYRA mutat,
  // amelyen ezt a metódust meghívjuk (pl. `userFromTheDb.comparePassword('bevittJelszo')`).
  // `candidatePassword`: a felhasználó által beírt, ellenőrizendő (plain text) jelszó.
  // `this.password`: az adatbázisban tárolt, már hash-elt jelszó az adott user dokumentumban.
  return bcrypt.compare(candidatePassword, this.password); // A bcrypt összehasonlítja a plain text kandidátus jelszót a tárolt hash-sel.
                                                            // Visszaad egy Promise-t, ami `true`-ra vagy `false`-ra értékelődik ki.
};

module.exports = mongoose.model("User", userSchema); // Létrehoz egy Mongoose modellt 'User' néven a `userSchema` alapján, és exportálja azt.
                                                     // A Mongoose ezt fogja használni a 'users' (többes szám, kisbetűs) kollekció kezelésére az adatbázisban.
