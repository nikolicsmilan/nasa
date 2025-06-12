// src/models/users.mongo.js
const mongoose = require("mongoose"); // Imports the Mongoose library, an ODM (Object Data Modeling) library for MongoDB in Node.js.
const bcrypt = require('bcrypt'); // Imports the bcrypt library for securely hashing passwords.

const userSchema = new mongoose.Schema({ // Creates a new Mongoose schema to define the structure of user documents.
  username: { // Definition of the username field.
    type: String, // The field type is String (text).
    required: [true, 'Username is required'], // Marks the field as mandatory; provides an error message if missing.
    unique: true, // Ensures that each username is unique in the database.
    trim: true, // Automatically removes any leading or trailing whitespace from the string.
  },
  email: { // Definition of the email address field.
    type: String, // The field type is String.
    required: [true, 'Email is required'], // Marks the field as mandatory.
    unique: true, // Ensures that each email address is unique.
    trim: true, // Removes leading/trailing whitespace.
    lowercase: true, // Automatically converts the email address to lowercase before saving.
    match: [/.+\@.+\..+/, 'Please fill a valid email address'], // Regular expression for basic email format validation.
  },
  password: { // Definition of the password field.
    type: String, // The field type is String (will store the hashed password).
    // The 'required' field here is a function to dynamically determine if the password is required based on the 'role'.
    required: function() { // This is a Mongoose schema validation function.
        // The `this` keyword in this context refers to the DOCUMENT (user object)
        // that is currently being validated or saved. Thus, `this.role` gives the value of the 'role' field of that user document.
        return !['subscriber', 'visitor_hr'].includes(this.role); // Password is required if the user's role is NOT 'subscriber' AND NOT 'visitor_hr'.
      },
    minlength: 6, // Specifies that the password must be at least 6 characters long (this applies to the plain text password before hashing).
  },
  role: { // Definition of the user role field.
    type: String, // The field type is String.
    enum: ['subscriber', 'commenter', 'visitor_hr', 'moderator', 'admin'], // Defines the list of acceptable values for the role.
    required: true, // Marks the field as mandatory.
    default: 'subscriber', // Default value if not provided; new users are created as 'subscriber'.
  },
  registrationDate: { // Registration date field.
    type: Date, // The field type is Date.
    default: Date.now, // Default value is the current date and time when the document is created.
  },
  // Other potential fields could be here, e.g., lastLogin, profilePicture, etc.
  // ...
}, { timestamps: true }); // Mongoose option: automatically adds `createdAt` and `updatedAt` fields to each document.

// Mongoose middleware that runs BEFORE (pre) the 'save' event.
// Hashes the password before saving, but only if the password field has been modified.
userSchema.pre('save', async function (next) { // The `async function` is important here because we use `await` inside.
                                            // Using the `function` keyword (not an arrow function) ensures `this` is correctly bound.
  // The `this` keyword in this `pre('save')` hook refers to the Mongoose DOCUMENT
  // that is about to be saved to the database.
  if (!this.isModified('password')) { // Checks if the 'password' field has been modified during this save attempt.
                                      // If not modified (e.g., only updating the email), no need to re-hash.
    return next(); // Passes control to the next middleware or the actual save operation.
  }
  try { // Error handling for the hashing process.
    const salt = await bcrypt.genSalt(10); // Generates a "salt" for hashing (10 is the cost factor, determining hash strength).
    // `this.password` here refers to the (plain text) password of the user document being saved.
    // This plain text password is hashed with the generated salt.
    this.password = await bcrypt.hash(this.password, salt); // Overwrites the document's 'password' field with the hashed password.
    return next(); // Passes control to the next middleware/save operation.
  } catch (error) { // If an error occurs during hashing.
    return next(error); // Passes the error to Mongoose's error handler.
  }
});

// Adds a custom instance method to the userSchema for comparing passwords.
// This method will be available on instances of the User model.
userSchema.methods.comparePassword = async function (candidatePassword) { // `async function` is needed here for `await`.
                                                                      // The `function` keyword is also important here for correct `this` binding.
  // The `this` keyword in this instance method refers to the specific User DOCUMENT INSTANCE
  // on which this method is called (e.g., `userFromTheDb.comparePassword('enteredPassword')`).
  // `candidatePassword`: the (plain text) password entered by the user, to be checked.
  // `this.password`: the stored, already hashed password in the user document from the database.
  return bcrypt.compare(candidatePassword, this.password); // bcrypt compares the plain text candidate password with the stored hash.
                                                            // Returns a Promise that resolves to `true` or `false`.
};

module.exports = mongoose.model("User", userSchema); // Creates a Mongoose model named 'User' based on `userSchema` and exports it.
                                                     // Mongoose will use this to manage the 'users' (plural, lowercase) collection in the database.