# 📅 **Day 47: Express – Middleware and Logger**

Today, I learned about **Middleware in Express** and how to create a **custom logger middleware** to track incoming HTTP requests. This helped me understand how Express processes requests through a pipeline before sending responses.

## 🔍 Overview

    - Middleware functions act as an execution layer between the request and response.
    - They can execute code, modify request/response objects, and control the flow.
    - Middleware is essential for logging, authentication, validation, and security.

## 📘 What I Learned

    - What middleware is and why it is used in Express.
    - The structure of a middleware function: (req, res, next).
    - How to create a custom logger middleware.
    - How to register middleware globally using app.use().
    - How middleware executes before route handlers.
    
## 🔐 Cybersecurity Insight

    - Logger middleware improves visibility and monitoring of server activity.
    - It helps detect suspicious request patterns and unauthorized access attempts.
    - Middleware-based logging is a foundational step toward auditing and intrusion detection.
    - Centralized request logging supports better incident response and forensic analysis.
