# **Backend Project**

This repository serves as the backend for your application, built using **Node.js**, **Express**, and **TypeScript**. It features robust authentication, secure password hashing, and reliable data validation.

---

## **Table of Contents**

- [**Features**](#features)
- [**Prerequisites**](#prerequisites)
- [**Installation**](#installation)
  - [Quick Setup](#quick-setup)
  - [Package Installation Guide](#package-installation-guide)
  - [Database Setup](#database-setup)
  - [Environment Setup](#environment-setup)
- [**Scripts**](#scripts)
- [**Folder Structure**](#folder-structure)
- [**Technologies Used**](#technologies-used)

---

## **Features**

✅ **Authentication**: Implements secure user authentication with **JWT (JSON Web Tokens)**.  
✅ **Password Hashing**: Uses **bcryptjs** to hash passwords, preventing plain text storage.  
✅ **Input Validation**: Validates incoming data using **zod** for integrity and consistency.  
✅ **CORS**: Configured to handle Cross-Origin Resource Sharing securely.  
✅ **Environment Management**: Manages sensitive data via `.env` files using **dotenv**.

### **Bonus Features**

🌟 **Send OTP**: Leverage **nodemailer** to send One-Time Passwords (OTPs) for authentication.  
🌟 **Optional Security Enhancements**: Add extra security layers with **helmet** and **AWS SDK** for cloud integration.

---

## **Prerequisites**

Before setting up, ensure the following are installed on your machine:

- [**Node.js**](https://nodejs.org/) (v16+ recommended)
- [**npm**](https://www.npmjs.com/) or [**yarn**](https://yarnpkg.com/)

---

## **Installation**

### **Quick Setup**

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install all dependencies**:

   ```bash
   npm install
   ```

---

### **Package Installation Guide**

Below is the list of required packages and their installation commands. Install everything at once or individually.

#### **Core Dependencies**

```bash
npm install express typescript bcryptjs jsonwebtoken zod cookie-parser cors dotenv
```

#### **TypeScript Type Definitions**

```bash
npm install --save-dev @types/express @types/node @types/bcryptjs @types/jsonwebtoken @types/cookie-parser @types/cors @types/dotenv
```

#### **Development Tools**

```bash
npm install --save-dev tsx typescript
```

### **Optional Security Packages**

Add these for enhanced security:

```bash
npm install express-rate-limit
npm install helmet nodemailer
npm install -g docker # Optional: For containerized deployments
npm install aws-sdk   # Optional: For cloud services
```

---

### **Database Setup**

#### **MongoDB Setup**

For MongoDB, install **mongoose** (a popular ODM for MongoDB):

```bash
npm install mongoose
```

[Learn More About Mongoose](https://mongoosejs.com/docs/)

#### **MySQL Setup**

For MySQL, install **mysql2** (recommended for modern features and better performance):

```bash
npm install mysql2
```

Or, install **mysql** (older, but widely used):

```bash
npm install mysql
```

[Learn More About MySQL2](https://www.npmjs.com/package/mysql2)

---

### **Environment Setup**

Create a `.env` file in the root directory and add the following:

```env
NODE_ENV=development
PORT=4000
DATABASE_URL=your_database_url_here
JWT_SECRET=random_secret_value
```

---

## **Scripts**

Use these commands to build, develop, and run the project:

| Command         | Description                                         |
| --------------- | --------------------------------------------------- |
| `npm run dev`   | Starts the development server with live reload      |
| `npm run build` | Compiles TypeScript files into JavaScript           |
| `npm start`     | Builds the project and starts the production server |

### **Start the Development Server**

```bash
npm run dev
```

### **Build and Start the Production Server**

```bash
npm start
```

---

### <h1>Folder Structure</h1>

MVC (Modal View Controller):

```
backend/
├── src/                # Source files
│   ├── controllers/    # Request-response logic
│   │   ├── auth.controller.ts
│   │   ├── user.controller.ts
│   │   └── ...otherControllers
│   ├── models/         # Database schemas/models
│   │   ├── user.model.ts
│   │   └── ...otherModels
│   ├── routes/         # API routes
│   │   ├── auth.routes.ts
│   │   ├── user.routes.ts
│   │   └── ...otherRoutes
│   ├── middlewares/    # Middleware functions
│   │   ├── auth.middleware.ts
│   │   └── ...otherMiddlewares
│   ├── services/       # Business logic
│   │   ├── auth.service.ts
│   │   ├── user.service.ts
│   │   └── ...otherServices
│   ├── utils/          # Utility/helper functions
│   │   ├── jwt.util.ts
│   │   ├── password.util.ts
│   │   └── ...otherUtils
│   ├── config/         # Configurations (e.g., database, environment)
│   │   ├── database.ts
│   │   ├── env.ts
│   │   └── ...otherConfigs
│   ├── validators/     # Input validation schemas
│   │   ├── auth.validator.ts
│   │   ├── user.validator.ts
│   │   └── ...otherValidators
│   ├── main.ts         # Entry point to start the server
│   └── ...otherFiles   # Additional files if needed
├── .env                # Environment variables
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
├── README.md           # Documentation

```

---

### Explanation of Folders:

1. **`controllers/`**:

   - Contains logic for handling HTTP requests and responses.
   - Example: `auth.controller.ts` manages login, registration, and logout functionalities.

2. **`models/`**:

   - Defines data schemas for the database (e.g., MongoDB with Mongoose, Sequelize for SQL).
   - Example: `user.model.ts` specifies the structure of a user document.

3. **`routes/`**:

   - Organizes application routes by feature/module.
   - Example: `auth.routes.ts` defines routes like `/login`, `/register`, and `/logout`.

4. **`middlewares/`**:

   - Includes reusable middleware for request processing.
   - Example: `auth.middleware.ts` ensures users are authenticated before accessing protected routes.

5. **`services/`**:

   - Implements the core business logic of the application, separate from controllers.
   - Example: `auth.service.ts` contains functions for token generation and password hashing.

6. **`utils/`**:

   - Provides utility functions for common operations.
   - Example: `jwt.util.ts` includes helper functions for generating and verifying JWT tokens.

7. **`config/`**:

   - Stores configuration files (e.g., database connection, environment setup).
   - Example: `database.ts` connects to MongoDB or MySQL.

8. **`interfaces/`**:

   - Defines TypeScript interfaces and types to ensure type safety.
   - Example: `user.interface.ts` defines the structure of a `User` object.

9. **`validators/`**:

   - Contains input validation logic using libraries like `zod` or `Joi`.
   - Example: `auth.validator.ts` validates login and registration data.

10. **Root Files**:
    - `main.ts`: The entry point for starting the server.

---

### Sample File Example:

#### **`auth.controller.ts`**

```typescript
import { Request, Response } from "express";
import { login, register } from "../services/auth.service";

export const loginController = async (req: Request, res: Response) => {
  try {
    const token = await login(req.body);
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const registerController = async (req: Request, res: Response) => {
  try {
    const user = await register(req.body);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
```

#### **`auth.service.ts`**

```typescript
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model";
import { JWT_SECRET } from "../config/env";

export const login = async (data: { email: string; password: string }) => {
  const user = await UserModel.findOne({ email: data.email });
  if (!user || !(await bcrypt.compare(data.password, user.password))) {
    throw new Error("Invalid email or password");
  }
  return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
};

export const register = async (data: {
  email: string;
  password: string;
  name: string;
}) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = new UserModel({ ...data, password: hashedPassword });
  await user.save();
  return user;
};
```

#### **`main.ts`**

```typescript
import app from "./app";
import { PORT } from "./config/env";

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## This structure ensures scalability and maintainability as your project grows.




## **Technologies Used**

| Technology        | Description                                                                 | Documentation                                                     |
| ----------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Express**       | Lightweight web framework for building APIs.                                | [Express Docs](https://www.npmjs.com/package/express)             |
| **TypeScript**    | Superset of JavaScript with static typing.                                  | [TypeScript Docs](https://www.npmjs.com/package/typescript)       |
| **bcryptjs**      | Secure password hashing library.                                            | [bcryptjs Docs](https://www.npmjs.com/package/bcryptjs)           |
| **jsonwebtoken**  | Generate and verify JSON Web Tokens (JWTs).                                 | [JWT Docs](https://www.npmjs.com/package/jsonwebtoken)            |
| **dotenv**        | Loads environment variables from `.env` files.                              | [dotenv Docs](https://www.npmjs.com/package/dotenv)               |
| **zod**           | Schema validation library for runtime data validation.                      | [zod Docs](https://www.npmjs.com/package/zod)                     |
| **cookie-parser** | Middleware for parsing cookies.                                             | [cookie-parser Docs](https://www.npmjs.com/package/cookie-parser) |
| **CORS**          | Middleware to enable secure Cross-Origin Resource Sharing.                  | [CORS Docs](https://www.npmjs.com/package/cors)                   |
| **tsx**           | Fast Node.js runtime for TypeScript with hot reloading in development mode. | [tsx Docs](https://www.npmjs.com/package/tsx)                     |

---




