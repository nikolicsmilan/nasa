// src/models/__mocks__/users.mongo.js

// Létrehozunk egy ál-felhasználót, hogy legyen mit visszaadni
const mockUser = {
    _id: 'mockUserId',
    username: 'Test User',
    email: 'test.user@example.com',
    role: 'subscriber',
    save: jest.fn().mockResolvedValue(this), // Egy ál-mentés függvény
  };
  /*
  // Ál-függvények, amik a valódi Mongoose metódusokat utánozzák
  const findOne = jest.fn().mockImplementation((query) => {
    // Ha az email alapján keresünk, és az megegyezik a mock user emailjével,
    // akkor visszaadjuk az ál-usert. Különben null-t.
    if (query.email === mockUser.email) {
      return Promise.resolve(mockUser);
    }
    return Promise.resolve(null);
  });*/


  const findOne = jest.fn()
  .mockResolvedValueOnce(null)
  .mockResolvedValue(mockUser);
  
  const find = jest.fn().mockImplementation(() => {
    // A find({}) hívásra visszaadunk egy olyan objektumot,
    // aminek van .select() metódusa, ami visszaadja az ál-userek listáját.
    return {
      select: jest.fn().mockResolvedValue([mockUser]),
    };
  });
  
  // A save függvényt a new User() hívások utáni mentésre használjuk
  const save = jest.fn().mockResolvedValue(mockUser);
  
  // A konstruktor függvény, ami a `new User()` híváskor lefut
  const User = function(data) {
      return {
          ...data,
          save, // Hozzáadjuk a save metódust az új példányhoz
      };
  };
  
  User.findOne = findOne;
  User.find = find;
  
  module.exports = User;