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
npm install helmet
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

npm install express-rate-limit [Express-Rate-Limit Docs](https://www.npmjs.com/package/express-rate-limit)

npm install nodemailer [Nodemailer Docs](https://nodemailer.com/)

npm install -g docker [ Docker Docs](https://www.npmjs.com/package/docker)

---

### <h1>Database Setup</h1>

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

### **VS-Code Extension**

---

Prettier - Code formatter # (optional) <br/>
ES7+ React/Redux/React-Native snippets <br/>
Better Comments # (optional) <br/>
JavaScript and TypeScript Nightly #(optional) <br/>

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

## **Technologies Used**

| Technology        | Description                                                                 | Documentation                                                     |
| ----------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Express**       | Lightweight web framework for building APIs.                                | [Express Docs](https://www.npmjs.com/package/express)             |
| **TypeScript**    | Superset of JavaScript with static typing.                                  | [TypeScript Docs](https://www.npmjs.com/package/typescript)       |
| **helmet**        | Help secure Express apps by setting HTTP response headers.                  | [Helmet Docs](https://www.npmjs.com/package/helmet)               |
| **bcryptjs**      | Secure password hashing library.                                            | [bcryptjs Docs](https://www.npmjs.com/package/bcryptjs)           |
| **jsonwebtoken**  | Generate and verify JSON Web Tokens (JWTs).                                 | [JWT Docs](https://www.npmjs.com/package/jsonwebtoken)            |
| **dotenv**        | Loads environment variables from `.env` files.                              | [dotenv Docs](https://www.npmjs.com/package/dotenv)               |
| **zod**           | Schema validation library for runtime data validation.                      | [zod Docs](https://www.npmjs.com/package/zod)                     |
| **cookie-parser** | Middleware for parsing cookies.                                             | [cookie-parser Docs](https://www.npmjs.com/package/cookie-parser) |
| **CORS**          | Middleware to enable secure Cross-Origin Resource Sharing.                  | [CORS Docs](https://www.npmjs.com/package/cors)                   |
| **tsx**           | Fast Node.js runtime for TypeScript with hot reloading in development mode. | [tsx Docs](https://www.npmjs.com/package/tsx)                     |

---
