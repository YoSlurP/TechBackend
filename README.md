# TechBackend

This project is a **Node.js + Express** based REST API backend for handling messages, responses, and administration. The database connection is made through **MySQL**.
[Techsupport frontend](https://github.com/balhun/techsupport)

## 📦 Requirements

- Node.js (>= 14)
- npm (Node Package Manager)
- MySQL server
- `.env` file with database connection data:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_DATABASE=techbackend
```

## 🚀 Installation

1. Clone or extract the project.
2. Install dependencies:

```bash
npm install
```

3. Run the database migration (create tables):

```bash
node migrate.js
```

4. Start the server:

```bash
node index.js
```

## 🧪 Testing

```bash
pnpm run vitest
```

## 📁 Directory Structure

```
TechBackend/
├── controllers/        # Business logic (e.g., messages, admin, responses)
├── routes/             # API route definitions
├── middlewares/        # Authentication, error handling, etc.
├── errors/             # Custom error handler classes
├── index.js            # Entry point, Express server
├── migrate.js          # Database table creation
├── connection.js       # MySQL database connection
├── package.json        # Project metadata and dependencies
├── Backend.test.js     # Tests
└── Database diagram.png # Visual database diagram
```

## 🔌 Key API Endpoints

### Messages

- `GET /uzenetek` – Retrieve all messages
- `POST /uzenetek` – Create a new message
- `DELETE /uzenetek/:id` – Delete a message

### Responses

- `POST /valaszok/:id` – Add a response to a message

### Admin

- `POST /admin/login` – Admin login
- `GET /admin/uzenetek` – List messages with admin privileges

> Admin privileges require JWT-based authentication (token in the `Authorization` header).

## 🧭 C4 Model

![C4 model](https://github.com/YoSlurP/TechBackend/blob/main/C4model.png)

### System Level

The goal of the system is to:

- manage user messages,
- allow admin responses,
- securely handle admin login.

### Container Level

- **Backend (Express)**: REST API containing logic and routes
- **MySQL Database**: serves stored data (messages, responses, admin)
- **Test script**: verifies the system’s operation (`Backend.test.js`)

## 🗃️ Database Structure

![Database diagram](https://github.com/YoSlurP/TechBackend/blob/main/Database%20diagram.png)

Main tables:

- `admin(id)`
- `uzenetek(id, uzenet, userId, adminId, cim, date)`
- `valasz(id, uzenetId, valasz, adminId, date)` – response messages (exact fields: see migrate.js)

## 📌 Notes

- `middlewares/adminAuth.js` handles admin authentication based on JWT token.
- `middlewares/errorHandler.js` is a global error handler.
- The connection is managed by `connection.js` using the `mysql2/promise` library.
