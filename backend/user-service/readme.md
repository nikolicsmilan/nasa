# User Service - NASA Project

A core user management microservice responsible for handling all user-related operations, including registration, authentication, and profile management.

---

## ✨ Key Features

* **Scalable & Resilient:** Runs in Node.js Cluster Mode to utilize all available CPU cores and automatically restart on failure.
* **Modern Architecture:** Clean separation of concerns with a modular structure (controllers, services, data models).
* **Secure:** Uses JWT for stateless authentication and `bcrypt` for password hashing.
* **Robust:** Built with extensive error handling and detailed logging for production environments.
* **Testable:** Designed for testability with a mocked data layer for reliable unit tests.

---

## 🛠️ Technologies

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB with Mongoose ODM
* **Authentication:** JSON Web Tokens (JWT)
* **Password Hashing:** `bcrypt`
* **Process Management:** Node.js Cluster Module
* **Testing:** Jest

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16 or higher recommended)
* npm
* A running MongoDB instance (local or cloud-based like MongoDB Atlas)

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    cd user-service
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the root of the `user-service` directory and add the required environment variables (see below).

### Running the Service

* **For development (with hot-reloading using nodemon):**
    ```bash
    npm run watch
    ```
* **For production:**
    ```bash
    npm start
    ```
    This command will start the server in Cluster Mode, creating a worker for each CPU core.

---

## ⚙️ Environment Variables

Create a `.env` file in the root of the `user-service` directory with the following variables:

```dotenv
# The port the server will listen on
PORT=8000

# Your MongoDB connection string
MONGO_URL="mongodb+srv://<user>:<password>@cluster.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

# Secret key for signing JWTs (use a long, random string in production)
JWT_SECRET="your-super-secret-key-that-is-long-and-random"

# Set to 'true' to connect to the database on startup
CONNECT_TO_DB=true
```

---

## 🧪 Testing

This project uses Jest for testing. Mocks are in place for the data layer, allowing for fast and isolated unit tests.

To run the entire test suite:

```bash
npm test
```

---

## 🏛️ Architecture & Design Decisions

This service is built with scalability and maintainability as top priorities.

### Cluster Mode for Performance
The application leverages the native cluster module to distribute incoming requests across multiple worker processes. This prevents the Node.js event loop from being blocked by CPU-intensive tasks (like password hashing) and ensures the service remains responsive under load. This design also provides a self-healing mechanism, as the primary process will automatically replace any worker that crashes.

### Separation of Concerns
The codebase is structured into distinct layers:
* `routes`: Define the API endpoints.
* `controllers`: Contain the business logic for handling requests.
* `models`: Define the database schemas and data interaction logic.
This modular approach makes the code easier to navigate, maintain, and test.

### Asynchronous Server Startup (`startServer`)
The server startup logic is encapsulated in an `async startServer()` function. This ensures that essential asynchronous tasks (like connecting to the database) are completed before the server starts accepting traffic, preventing race conditions and improving startup reliability.

---

## API Endpoints

A detailed API documentation will be available soon. The main endpoints include:

* `POST /api/users/register`: Register a new user.
* `POST /api/users/login`: Authenticate a user and receive a JWT.
* `GET /api/users/profile`: Get the profile of the authenticated user.
* `PUT /api/users/profile`: Update the profile of the authenticated user.

(Admin endpoints for user management are also available and will be documented separately.)

---

## License

ISC

---

## Author

Nikolics Milan

