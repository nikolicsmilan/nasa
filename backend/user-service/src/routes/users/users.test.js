// src/routes/users/users.test.js

const request = require('supertest'); // Imports the supertest library to make HTTP requests to our app.
const app = require('../../app'); // Imports the Express application instance from app.js.
const User = require('../../models/users.mongo'); // Imports the real User model so we can access its methods to mock them.

jest.mock('../../models/users.mongo'); // Tells Jest to replace the actual User model with its mock version for all tests in this file.

describe('Users API', () => { // Defines a test suite, a container for all tests related to the Users API.

  beforeEach(() => { // A setup function that runs before each individual test (`it` block) below.
    User.findOne.mockClear(); // Clears the call history and mock implementation of the findOne function.
    User.find.mockClear(); // Clears the call history and mock implementation of the find function.
    if (User.prototype.save) { // A safety check to prevent errors if the save mock hasn't been set yet.
      User.prototype.save.mockClear(); // Clears the save mock's history.
    }
  });

  describe('POST /api/users/subscribe', () => { // A nested suite for tests specifically targeting the POST /subscribe endpoint.

    it('should respond with 201 Created for a valid subscription', async () => { // Defines a single test case for the successful subscription scenario.
      User.findOne.mockResolvedValue(null); // Sets up the mock: for this test, `findOne` should return `null` (user doesn't exist).
      User.prototype.save = jest.fn().mockResolvedValue(true); // Mocks the `save` method on a new User instance to simulate a successful save.

      const newSubscriber = { // Defines the payload (the data) to be sent in the request body.
        username: 'Test User',
        email: 'test.user@example.com'
      };

      const response = await request(app) // Uses supertest to send a POST request to the specified endpoint.
        .post('/api/users/subscribe')
        .send(newSubscriber) // Attaches the payload to the request.
        .expect('Content-Type', /json/) // Asserts that the response Content-Type header is some form of JSON.
        .expect(201); // Asserts that the HTTP status code of the response is 201 (Created).
      
      expect(response.body.user.email).toBe(newSubscriber.email); // Asserts that the email in the response body matches the one we sent.
    });

    it('should respond with 400 Bad Request if email is missing', async () => { // A test case for an invalid request.
      await request(app) // Sends the request.
        .post('/api/users/subscribe')
        .send({ username: 'IncompleteUser' }) // Sends a payload that is intentionally missing the 'email' field.
        .expect('Content-Type', /json/) // Asserts the response is JSON.
        .expect(400); // Asserts that the status code is 400 (Bad Request).
    });

    it('should respond with 409 Conflict if the user already exists', async () => { // A test case for when a user tries to subscribe with an existing email.
      User.findOne.mockResolvedValue({ // Sets up the mock: for this test, `findOne` should return an existing user object.
        _id: 'existingUserId',
        username: 'ExistingUser',
        email: 'existing@example.com',
        role: 'admin',
      });

      const existingData = { // Defines a payload with an email that 'already exists' in our mock scenario.
        username: 'NewUserTryingToRegister',
        email: 'existing@example.com'
      };

      await request(app) // Sends the request.
        .post('/api/users/subscribe')
        .send(existingData)
        .expect('Content-Type', /json/) // Asserts the response is JSON.
        .expect(409); // Asserts that the status code is 409 (Conflict).
    });
  });

  describe('GET /api/users', () => { // A nested suite for tests targeting the GET /users endpoint.

    it('should respond with 200 OK and an array of users', async () => { // A test case for successfully fetching all users.
      const mockUsers = [ // Creates a sample array of user objects to be returned by the mock.
        { _id: '1', username: 'UserOne', email: 'one@test.com' },
        { _id: '2', username: 'UserTwo', email: 'two@test.com' },
      ];
      User.find.mockReturnValue({ // Sets up the mock for `find`: it returns an object...
        select: jest.fn().mockResolvedValue(mockUsers) // ...that has a `select` method, which in turn returns our mock user array.
      });

      const response = await request(app) // Sends a GET request to the endpoint.
        .get('/api/users')
        .expect('Content-Type', /json/) // Asserts the response is JSON.
        .expect(200); // Asserts the status code is 200 (OK).

      expect(response.body).toBeInstanceOf(Array); // Asserts that the response body is an array.
      expect(response.body.length).toBe(2); // Asserts that the array contains exactly 2 items.
      expect(response.body[0].username).toBe('UserOne'); // Asserts that the first user's name is correct.
    });
  });

});