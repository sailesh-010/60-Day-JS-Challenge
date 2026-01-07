# 📅 Day 51: Building RESTful APIs & CRUD
Today, I moved from theory to practice by building a functional REST API. I learned how to structure a server that handles the full lifecycle of a resource—in this case, a "To-Do" item—and how to bridge the gap between a backend server and a frontend interface.

## 🔍 Overview
    -REST (Representational State Transfer) is an architectural style for providing interoperability between computer systems.
    -CRUD Operations: Every data-driven app relies on Create, Read, Update, and Delete.
    -Statelessness: Each request from the client must contain all the information the server needs to fulfill it.
    -The "In-Memory" Gap: Realized that variables in code are volatile; if the server restarts, the data vanishes.

## 📘 What I Learned
    -Path Parameters: Using :id in routes to target specific resources (e.g., /todos/123).
    -HTTP Method Mapping: - GET for fetching data.
    -POST for creating new records.
    -PUT for replacing/updating records.
    -DELETE for removing records.
    -The Fetch API: How the browser uses fetch() to send asynchronous requests to my Express routes without refreshing the page.
    -Client-Server Separation: The backend handles the logic and data, while the frontend handles the display.
    
## 🔐 Cybersecurity Insight
    -ID Safety: Avoid using simple incremental IDs (1, 2, 3) in production; attackers can "guess" other users' data. Using UUIDs or hashed IDs is safer.
    -Method Limitation: Only enable the HTTP methods your API actually needs. If an endpoint shouldn't be deleted, don't write a DELETE route for it.
    -CORS Policy: Learned that "Cross-Origin Resource Sharing" is a security feature that prevents unauthorized websites from making requests to my API.
