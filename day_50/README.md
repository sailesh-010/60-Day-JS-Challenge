# 📅 **Day 50: Express – JSON & API Handling**

Today, I learned how to **send and receive JSON data in Express.js**, a fundamental skill for building RESTful APIs that communicate with frontend frameworks (like React or Vue) and external services.

## 🔍 Overview

    - JSON (JavaScript Object Notation) is the standard format for data exchange on the web.
    - Express requires specific middleware to interpret incoming JSON data.
    - Handling JSON allows the server to act as a pure API, decoupling it from the UI.
    - It enables dynamic communication using methods like `POST` and `PUT`.

## 📘 What I Learned

    - Why `app.use(express.json())` is mandatory to parse incoming requests.
    - How to access client data using `req.body`.
    - How to send structured responses with the correct headers using `res.json()`.
    - The difference between `res.send()` (generic) and `res.json()` (specific).
    - How to test API endpoints using tools like Postman or `curl`.
    - How headers like `Content-Type: application/json` affect data parsing.

## 🔐 Cybersecurity Insight
    - Input Validation: Never trust `req.body`; always validate data types and values before processing.
    - Payload Limits: Configuring `express.json({ limit: '10kb' })` prevents Denial of Service (DoS) attacks via massive JSON payloads.
    - Sanitization: Stripping dangerous characters from JSON input prevents injection attacks.
    - Error Handling: Sending generic JSON error messages prevents leaking sensitive server stack traces to the client.
    - Strict Parsing: Ensuring the server only accepts valid JSON prevents parsing crashes.

