# 📅 Day 36: Node.Js Modules

This is my **Day 36** of the **JavaScript for Cybersecurity** journey.  
Today, I learned about **node.Js modules** and how code is organized and reused in Node.js.

---

## 🔍 Overview
    - Modules are reusable blocks of code in node.Js
    - Each file in node.Js is treated as a separate module
    - Modules help in:
        - Code organization
        - Reusability
        - Maintainability
        - Reducing complexity in large applications

---

## 📘 What I Learned
    - node.Js uses the CommonJS module system by default
    - The require() function is used to import modules
    - module.exports is used to export functions, objects, or variables
    - Built-in modules like fs, http, and path can be used without installation
    - Custom modules can be created and reused across files

---

## 🔐 Cybersecurity Insight
    - Modules help isolate functionality, reducing the application attack surface
    - Exporting only required functions follows the principle of least privilege
    - Improper use of dynamic require() can introduce security risks
    - Trusted and well-audited modules should be preferred to avoid supply chain attacks
    - Modular design improves code auditing and vulnerability tracking

---
