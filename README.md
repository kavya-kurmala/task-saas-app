# 📝 Mini SaaS Task Management Application

## 📌 Project Overview

This is a full-stack Mini SaaS Task Management application that allows users to securely register, log in, and manage their personal tasks. Each user can create, view, update, and delete their own tasks with proper authentication and data isolation.

---

## 🚀 Live Demo

* 🌐 Frontend: https://your-frontend.vercel.app
* ⚙️ Backend API: https://your-backend.onrender.com

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL
* Sequelize ORM

### Authentication & Security

* JWT (JSON Web Tokens)
* bcrypt (Password Hashing)

---

## ✨ Features

* 🔐 User Signup & Login
* 🔑 Secure Authentication using JWT
* 🔒 Protected Routes
* 📝 Create Tasks
* 📋 View Only User-Specific Tasks
* ✅ Update Task Status (Pending → Completed)
* 🗑️ Delete Tasks
* 👤 Multi-user functionality (data isolation)

---

## 🗂️ Project Structure

```bash
task-saas-app/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── pages/
    │   └── App.jsx
```

---

## 🧠 Database Schema

### Users Table

* id (Primary Key)
* name
* email (Unique)
* password (Hashed)

### Tasks Table

* id (Primary Key)
* title
* description
* status (Pending / Completed)
* userId (Foreign Key)

### Relationship

* One User → Many Tasks
* Each Task belongs to one User

---

## 🔗 API Endpoints

### Auth Routes

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | /api/auth/signup | Register user |
| POST   | /api/auth/login  | Login user    |

### Task Routes (Protected)

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/tasks     | Get user tasks |
| POST   | /api/tasks     | Create task    |
| PUT    | /api/tasks/:id | Update task    |
| DELETE | /api/tasks/:id | Delete task    |

---

## 🔐 Security Features

* Passwords are hashed using bcrypt
* JWT tokens are used for authentication
* Protected routes ensure only logged-in users access data
* Each task is linked to a specific user using userId
* Users cannot access other users' tasks

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌍 Deployment

* Backend deployed on Render
* Frontend deployed on Vercel

---

## 🧪 Testing

* Tested API endpoints using Postman
* Verified multi-user task isolation
* Verified authentication and protected routes

---

## 🎯 Key Highlights

* Clean MVC backend architecture
* Secure authentication system
* Proper database relationships
* Real-world SaaS application structure
* Fully deployed and production-ready

---




## 📄 License

This project is for educational and assessment purposes.
