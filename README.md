# 📢 Task Notifier Demo

Demonstration project of **real-time notifications**, developed to showcase integration of a Node.js/Express backend with an HTML/CSS/JS frontend using Socket.IO.

The purpose of this repository is to serve as a reference for implementing a functional, lightweight, and modular real-time notification system for task creation, editing, and deletion events.

---

## 🚀 Technologies and Libraries Used

### Backend

* **Node.js + Express** – HTTP server, routing, and middleware organization.
* **Socket.IO** – Real-time communication (WebSockets), responsible for emitting notification events to all connected clients.
* **MySQL (or SQLite for demo)** – Persistent storage of tasks.
* **dotenv** – Environment variable management.
* **nodemon** – Facilitates development by automatically restarting the server.

### Frontend

* **HTML/CSS/JS** – Structure and logic of the interface.
* **Bootstrap 5** – Visual components and responsive design.
* **Bootstrap Icons** – Visual icons for buttons and interface elements.
* **Socket.IO client** – Receives events from the server and updates the frontend in real time.

---

## 📂 Project Structure

```
task-notifier-demo/
├─ backend/
│   ├─ server.js          # Express + Socket.IO server
│   ├─ routes/
│   │   └─ tasks.js       # Task CRUD routes
│   ├─ db/
│   │   └─ config.js      # Database configuration
│
├─ frontend/
│   ├─ index.html         # Main page
│   ├─ app.js             # Frontend JavaScript logic
│   ├─ style.css          # Custom styles
```

---

## ⚙️ Implemented Features

* **Task Creation** – User submits a task title; backend saves it to the database and emits an event to connected clients.
* **Task Editing** – Task titles can be updated; all clients receive notifications.
* **Task Deletion** – Deleting tasks updates the backend and emits a notification event.
* **Real-Time Notifications** – Toasters display title, description, and event timestamp.
* **Responsive Frontend** – Bootstrap-based layout with dynamic cards and toast container.

---

## 🧩 Communication Flow

1. Frontend connects to backend via **Socket.IO**.
2. **HTTP (fetch) requests** handle task CRUD operations.
3. Backend emits events to all connected clients.
4. Frontend automatically updates cards and displays notifications.

---

## 📌 Requirements and Considerations

* Node.js 18+
* MySQL 8+ (or SQLite as an alternative)
* Local network or server connection for Socket.IO communication

> The frontend was developed modularly, maintaining a clear separation between HTML, CSS, and JS. This simplifies maintenance, integration with future frameworks, and adding features like authentication or notification history.

---

## 🎯 Repository Purpose

* Serve as a **practical demonstration** of real-time notifications.
* Provide an **example of backend Node.js integration with a lightweight frontend**.
* Illustrate best practices for separation of responsibilities and communication via Socket.IO.
* Act as a **base for larger projects**, such as task management systems, corporate notifications, or admin dashboards.

---

## 📚 Dependency Notes

The project keeps separate package.json files for frontend and backend, ensuring dependency isolation and avoiding file path or script execution issues. Each part of the project should manage its own dependencies.

---

## 👨‍💻 Author

Developed by [Eduardoss45](https://github.com/Eduardoss45)
