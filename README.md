# Simple HTTP Server in Node.js

A basic HTTP server built using Node.js **without** external frameworks like Express.  
This server demonstrates how to handle different routes and send JSON responses using the native `http` module.

---

## 📌 Features
- Uses the built-in `http` module (no extra dependencies).
- Handles two GET routes:
  - `/` → `{ "message": "Welcome to the server" }`
  - `/about` → `{ "message": "This is the about route" }`
- Handles unknown routes with:
  - `{ "error": "Route not found" }`
- Sends proper HTTP status codes (`200` for success, `404` for not found).
- Includes basic error handling for the server.

---

## 📂 Project Structure
project/
│
├── task.ts # Main server file
└── README.md # Project documentation
