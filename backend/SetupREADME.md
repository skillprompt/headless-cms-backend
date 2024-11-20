# Backend Project

This project serves as the backend for your application, built with Node.js, Express, and TypeScript. It supports authentication, secure password hashing, and data validation.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Install Dependencies](#install-dependencies)
  - [Package Installation Guide](#package-installation-guide)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)

---

## Features

- **Authentication**: Secure user authentication using JWT (JSON Web Tokens)
- **Password Hashing**: Passwords are securely hashed using `bcryptjs` to prevent plain text storage
- **Input Validation**: Input validation is handled using `zod` to ensure data integrity
- **CORS**: Cross-Origin Resource Sharing (CORS) is enabled to manage API access from different domains
- **Environment Management**: Sensitive information and configuration are stored securely in `.env` files using the `dotenv` package

---

## Additional Features
- **Send OTP** : install nodemailer

## Prerequisites

Before setting up the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation

### Quick Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install all dependencies at once**:
   ```bash
   npm install
   ```

### Package Installation Guide

If you prefer to install packages individually or need to add specific packages, here's the complete list of required packages and their installation commands:

#### Main Dependencies

```bash
# Core packages
npm install express typescript
npm install bcryptjs jsonwebtoken zod
npm install cookie-parser cors dotenv


# TypeScript type definitions
npm install --save-dev @types/express @types/node
npm install --save-dev @types/bcryptjs @types/jsonwebtoken
npm install --save-dev @types/cookie-parser @types/cors @types/dotenv

# Development tools
npm install --save-dev tsx typescript
```

Or install everything in one command:

```bash
npm install express typescript bcryptjs jsonwebtoken zod cookie-parser cors dotenv && npm install --save-dev @types/express @types/node @types/bcryptjs @types/jsonwebtoken @types/cookie-parser @types/cors @types/dotenv tsx typescript
```

# Optional Security Downloads If Needed

npm install helmet <!-- no dependencies --- -->
npm install nodemailer

# For DataBase Download/SetUp Packages

# For MongoDB

mongoose: A popular ODM (Object Document Mapper) for MongoDB, providing a rich API to interact with MongoDB, including schema validation, model creation, and query building.

```bash
npm install mongoose
```

# For MySQL

mysql2: A MySQL client for Node.js that supports modern features and is faster than mysql.

```bash
npm install mysql2
```

mysql: An older package for MySQL, but still widely used.

```bash
npm install mysql
```

### Environment Setup

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=4000
DataBase_URL=your_database_url_here
JWT_SECRET=random_secret_value
```

---

## Scripts

The following scripts are available in the `package.json`:

| Command         | Description                                         |
| --------------- | --------------------------------------------------- |
| `npm run build` | Compiles TypeScript files into JavaScript           |
| `npm run dev`   | Starts the development server with live reload      |
| `npm start`     | Builds the project and starts the production server |

### Development Server

To run the server in development mode with live reload:

```bash
npm run dev
```

### Production Build and Start

To build the project and start the production server:

```bash
npm start
```

## Package.json Configuration

Here's the complete `package.json` configuration used in this project:

AFTER COMPLETION OF THE PAKAGES YOUR package.json file should look like this

We should remove the test add this in Script To Run npm run dev

```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "tsx --watch src/main.ts",
    "start": "npm run build && node dist/main.js"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "@types/bcryptjs": "^2.4.6",
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "jsonwebtoken": "^9.0.2",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/cookie-parser": "^1.4.7",
    "@types/cors": "^2.8.17",
    "@types/dotenv": "^6.1.1",
    "@types/jsonwebtoken": "^9.0.7",
    "@types/node": "^22.9.1",
    "tsx": "^4.19.2",
    "typescript": "^5.6.3"
  }
}
```

## Technologies Used

This project uses the following technologies:

- **Express**: A web framework for building APIs in Node.js
- **TypeScript**: A superset of JavaScript with type safety
- **bcryptjs**: A library for hashing passwords securely
- **jsonwebtoken**: For generating and verifying JSON Web Tokens (JWTs)
- **dotenv**: Loads environment variables from a `.env` file
- **zod**: A schema validation library to ensure that incoming data matches expected formats
- **cookie-parser**: To parse cookies sent by the client in HTTP requests
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing (CORS) on APIs

- **tsx**: A Node.js runtime that enables running TypeScript and ESM files directly with Node.js, providing fast compilation and hot module reloading for development

- Used in our development script: `"dev": "tsx --watch src/main.ts"`
