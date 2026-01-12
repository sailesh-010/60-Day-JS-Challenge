# 📅 **Day 56: The Backend (Express Server Setup)**

Today, I moved to the server-side to build the engine for my security scanner. I set up an **Express.js server** and created the endpoint that will receive the URL from the frontend we built yesterday.

This step is about establishing the "listener" that waits for data, processes it, and returns a result.

## 🔍 Overview

    -The Engine: Express.js acts as the web server, listening for incoming internet traffic on a specific port (e.g., 3000).
    -The Route: I created a `POST` route (`/scan`). Unlike `GET` requests (used for viewing pages), `POST` is designed to receive data (the URL to be scanned) securely.
    -Parsing Data: Data sent over the internet arrives as a stream of text. I used `express.json()` (the modern built-in version of `body-parser`) to convert that stream into a usable JavaScript object.

## 📘 What I Learned

    -Server Setup: How to initialize `const app = express()` and listen on a port.
    -POST Requests: Why we use `app.post('/scan', ...)` instead of `app.get`. GET puts data in the URL bar (visible/insecure for long data), while POST puts it in the request body (hidden/cleaner).
    -Body Parsing: Without `app.use(express.json())`, `req.body` is undefined. This middleware is essential for reading the JSON sent by the frontend.
    -Testing: Since the frontend isn't connected yet, I learned I can't test this in the browser address bar. I need tools like Postman or the VS Code Thunder Client extension to simulate the data transfer.

## 🔐 Cybersecurity Insight

    -Input Validation (Again): Just because the server *received* a URL doesn't mean it's safe. The first line of code inside the route should validate that `req.body.url` exists and is actually a URL, not a SQL injection string.
    -Payload Limits: By default, servers might accept massive payloads. Setting `app.use(express.json({ limit: '10kb' }))` prevents attackers from crashing the server by sending a request body that is gigabytes in size (Denial of Service).
    -Information Hiding: If the scan fails, I must return a generic error ("Scan failed") rather than a detailed stack trace that reveals my server's file structure.
    
