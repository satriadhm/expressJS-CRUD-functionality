# User-Product Transaction API

![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)

A lightweight and fast RESTful API built with **Express.js** for managing users, products, and transactions. The project uses MongoDB as the database, JWT for authentication, and modularized controllers, services, and routes for maintainability.

---

## Features
- **User Management**:
  - Register, Login, and retrieve user details.
- **Product Management**:
  - Add, view, and delete products.
- **Transaction Management**:
  - Create and view transactions.
- Secure authentication with JWT.
- Comprehensive error handling.

---

## Installation

### Prerequisites
- Node.js 14+ installed.
- MongoDB instance running locally or on a cloud service (e.g., MongoDB Atlas).

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd satriadhm-user-product-boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy the `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the following variables in `.env`:
     ```plaintext
     MONGO_URI=your-mongodb-uri
     JWT_SECRET=your-jwt-secret
     PORT=3000
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:3000`.

5. For production:
   ```bash
   npm start
   ```

---

## API Endpoints

### **User Endpoints**
- **Register**:  
  `POST /users/register`  
  Example request body:
  ```json
  {
    "username": "johndoe",
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```

- **Login**:  
  `POST /users/login`  
  Example request body:
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```

- **Get All Users**:  
  `GET /users/`

- **Get User by ID**:  
  `GET /users/:id`

---

### **Product Endpoints**
- **Add Product**:  
  `POST /products/` (Requires JWT Auth)
  Example request body:
  ```json
  {
    "name": "Product A",
    "price": 100,
    "stock": 50,
    "image": "http://example.com/image.jpg"
  }
  ```

- **Get All Products**:  
  `GET /products/`

- **Get Product by ID**:  
  `GET /products/:id`

- **Delete Product**:  
  `DELETE /products/:id` (Requires JWT Auth)

---

### **Transaction Endpoints**
- **Add Transaction**:  
  `POST /transactions/` (Requires JWT Auth)  
  Example request body:
  ```json
  {
    "userId": "60d0fe4f5311236168a109ca",
    "productId": "60d0fe4f5311236168a109cb",
    "quantity": 2,
    "total": 200
  }
  ```

- **Get All Transactions**:  
  `GET /transactions/`

- **Get Transaction by ID**:  
  `GET /transactions/:id`

---

## Project Structure
```plaintext
satriadhm-user-product-boilerplate/
├── controllers/         # Contains request handlers
├── models/              # Mongoose schemas and models
├── services/            # Business logic for models
├── routes/              # API route definitions
├── helpers/             # Utility functions like bcrypt and JWT
├── middlewares/         # Authentication and error handling
├── config/              # MongoDB connection configuration
├── .env.example         # Example environment variables
├── server.js            # Main server file
└── package.json         # Project dependencies and scripts
```

---

## Scripts

- **Start the app**:
  ```bash
  npm start
  ```
- **Run in development** (with nodemon):
  ```bash
  npm run dev
  ```
- **Run tests**:
  ```bash
  npm test
  ```

---

## License
[MIT](LICENSE)

---

## Improvements
1. Implement rate-limiting middleware for enhanced security.
2. Add unit and integration tests using Jest.
3. Set up CI/CD pipeline for automated testing and deployment.

---
