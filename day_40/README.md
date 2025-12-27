📅 Day 38: Built-in Module: Path
This is my **Day 38** of the **JavaScript for Cybersecurity** journey.

Today, I learned about the **File System Module in Node.js** and why **fs** is essential for writing code that works securely across different operating systems.

## 🔍 Overview

    -The fs module is a core Node.js module used to read, write, update, and delete files
    -It allows applications to interact directly with the server’s file system
    -Improper use of fs can introduce serious security vulnerabilities

## 📘 What I Learned

    -fs.readFileSync() reads file contents synchronously and blocks execution until completion
    -fs.writeFileSync() creates or overwrites files with new data
    -fs.appendFileSync() safely adds data without removing existing content
    -Synchronous methods are useful for scripts and setup tasks, but risky in servers
    -File operations should always be wrapped in try–catch blocks to handle errors safely

## 🔐 Cybersecurity Insight

    -Unrestricted file access can lead to Sensitive File Disclosure
    -Poor validation allows attackers to read files like /etc/passwd or config secret
    -Combining fs with unsafe user input can result in Directory Traversal attacks
    -Always enforce least privilege when accessing files
    -Never trust user-controlled filenames without validation and sanitization