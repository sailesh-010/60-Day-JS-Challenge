📅 **Day 39: Path Traversal Vulnerabilities in Node.js (File System Security)**
This is my Day 39 of the **JavaScript for Cybersecurity** journey.

Today, I explored **Path Traversal vulnerabilities**, how they occur in Node.js applications, and why improper file path handling can lead to serious security breaches even when using asynchronous fs methods.

## 🔍 Overview

```
-Path Traversal is a vulnerability that allows attackers to access unintended files
-It commonly occurs when user input is used directly in file system paths
-Attackers exploit ../ or ..\ sequences to escape intended directories
-Both synchronous and asynchronous fs methods are vulnerable if misused
```

## 📘 What I Learned

```
-User-controlled paths can manipulate file access if not validated
-path.join() and path.normalize() only clean paths but do not enforce security
-path.resolve() converts paths to absolute form for proper validation
-Checking resolved paths against a base directory prevents traversal
-Security must be enforced at the application logic level, not by fs alone
```

## 🔐 Cybersecurity Insight

```
-Path Traversal can expose sensitive files like configuration secrets
-Async fs does not prevent traversal by default
-Failing to restrict file access can lead to data leakage and privilege escalation
-Always enforce a fixed base directory when accessing files
-Never trust user input when working with file system paths
```
