# 📅 **Day 58: The Scraping Logic (Server-to-Server)**

Today, I upgraded the backend to perform actual network requests. Instead of just looking at the URL string, my server now uses the **Axios** library to "visit" the target website and download its HTML code.

This is a major milestone: my server is acting as a client to other servers.

## 🔍 Overview

    -The Tool: **Axios** is a promise-based HTTP client. It allows my Node.js server to send GET requests to other websites, just like a browser does.
    -The Goal: Fetch the raw HTML content of the user's provided URL.
    -The Extraction: Once we have the HTML string, we search for specific tags (like `<title>`) to prove we successfully accessed the site.
    -Asynchronous: Since fetching a website takes time, we use `async/await` to keep the code clean and readable.

## 📘 What I Learned

    -Server-as-Client: I learned that a backend server isn't just for *receiving* requests; it can also *make* requests to other APIs or websites.
    -Async/Await: I practiced using `async` functions and `await` to pause the code execution until the external website responds, preventing "callback hell."
    -Using Axios: How to install (`npm install axios`) and use this library as a cleaner alternative to the native `http` module.
    -Regex Basics: I used a simple Regular Expression (`/<title>(.*?)<\/title>/`) to "scrape" specific text out of a large HTML string.
    -Error Handling in Async: The importance of wrapping async code in `try...catch` blocks to handle cases where the target website is down.


## 🔐 Cybersecurity Insight

    -SSRF (Server-Side Request Forgery): By allowing users to tell my server *where* to go, I am opening a potential vulnerability. A hacker could send `http://localhost:8080` or `http://192.168.1.1` as the URL, forcing *my* server to scan its own internal network or local files.
    -Error Leakage: In the `catch` block, it is important not to return the full `error` object to the client, as it might reveal internal IP addresses or server configurations.
    -Denial of Service (DoS): If a user spams my API with thousands of requests to a slow website, my server's resources will be tied up waiting for those responses (axios timeouts).
