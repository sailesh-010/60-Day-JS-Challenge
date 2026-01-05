# 📅 **Day 49: Express – Serving Static Files**

Today, I learned how to **serve static files in Express.js**, a core capability for delivering front-end assets like HTML, CSS, JavaScript, and images using a single Node.js server.

This topic connected backend routing with frontend delivery, reinforcing how Express acts as the central traffic controller for web applications.


## 🔍 Overview

- Static files are assets that do not change dynamically on the server.
- Express provides built-in middleware to serve static content efficiently.
- Static file serving is essential for websites, dashboards, and client-side apps.
- It allows separation of backend logic and frontend assets.


## 📘 What I Learned

- What static files are and why they are used.
- How to use `express.static()` middleware.
- How to serve HTML, CSS, JS, and images from a folder.
- How Express maps URLs to static files automatically.
- How to use route prefixes for better structure.
- Difference between `express.static()` and `res.sendFile()`.


## 🔐 Cybersecurity Insight

- Serving static files via Express prevents direct folder access.
- Centralized control reduces exposure to unauthorized files.
- Static middleware can be combined with security headers.
- Helps enforce consistent asset delivery policies.
- Reduces attack surface by isolating backend logic from frontend assets.

