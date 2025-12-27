📅 Day 38: Built-in Module: File System (Asynchronous fs)
This is my Day 38 of the JavaScript for Cybersecurity journey.

Today, I learned about the **asynchronous File System Module** in Node.js and why using non-blocking fs methods is critical for building secure and scalable applications.

## 🔍 Overview

    -The fs module is a core Node.js module used to read, write, update, and delete files
    -Asynchronous fs methods allow file operations without blocking the event loop
    -They are essential for performance, especially in server-side applications
    -Misusing asynchronous fs can still introduce serious security vulnerabilities

## 📘 What I Learned

    -fs.readFile() reads file contents asynchronously without blocking execution
    -fs.writeFile() creates or overwrites files in a non-blocking manner
    -fs.appendFile() adds data safely while preserving existing content
    -Asynchronous methods improve scalability and responsiveness
    -Errors must be handled using callbacks, .catch(), or try–catch with async/await

## 🔐 Cybersecurity Insight

    -Unrestricted async file access can still lead to Sensitive File Disclosure
    -Poor path validation enables attackers to access files like /etc/passwd or configuration secrets
    -Using async fs with untrusted user input can cause Directory Traversal attacks
    -Always validate and sanitize file paths before accessing them
    -Apply the principle of least privilege even when using non-blocking file operations