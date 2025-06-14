// src/routes/users/users.test.js

const request = require('supertest');
const app = require('../../app');

// Ez a sor utasítja a Jest-et, hogy a teszt futása alatt
// a valódi 'users.mongo' modellt cserélje le egy ál-verzióra (mock).
// Így a tesztjeink soha nem fognak valódi adatbázishoz csatlakozni.
jest.mock('../../models/users.mongo');

// Teszt-csomag a felhasználói API végpontokhoz
describe('Users API', () => {

  // A '/subscribe' végpont tesztjei
  describe('POST /api/users/subscribe', () => {

    // Sikeres eset: a végpontnak 201-es státusszal és a felhasználó adataival kell válaszolnia
    it('should respond with 201 Created for a valid subscription', async () => {
      const newSubscriber = {
        username: 'Test User',
        email: 'test.user@example.com'
      };

      const response = await request(app)
        .post('/api/users/subscribe')
        .send(newSubscriber)
        .expect('Content-Type', /json/)
        .expect(201);
      
      // Ellenőrizzük, hogy a válasz body-ja tartalmazza-e a beküldött e-mail címet
      expect(response.body.user.email).toBe(newSubscriber.email);
    });

    // Hiba eset: a végpontnak 400-as hibát kell dobnia, ha hiányzik az e-mail
    it('should respond with 400 Bad Request if email is missing', async () => {
      await request(app)
        .post('/api/users/subscribe')
        .send({ username: 'IncompleteUser' }) // Szándékosan hiányos adat
        .expect('Content-Type', /json/)
        .expect(400);
    });
  });

  // A GET /api/users végpont tesztjei
  describe('GET /api/users', () => {

    // Sikeres eset: a végpontnak 200-as státusszal és egy tömbbel kell válaszolnia
    it('should respond with 200 OK and an array of users', async () => {
      const response = await request(app)
        .get('/api/users')
        .expect('Content-Type', /json/)
        .expect(200);

      // Ellenőrizzük, hogy a válasz egy tömb-e
      expect(response.body).toBeInstanceOf(Array);
    });
  });

});