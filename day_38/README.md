📅 Day 38: Built-in Module: Path
This is my **Day 38** of the **JavaScript for Cybersecurity** journey.

Today, I learned about the **Path Module in Node.js** and why **path.join()** is essential for writing code that works securely across different operating systems.

## 🔍 Overview

    -The path module is a core Node.js utility for handling file and directory paths
    -It ensures applications are portable between Windows and POSIX (Linux/macOS) systems
    -It solves the "separator conflict" automatically:
    -Windows uses backslashes (\)
    -Linux/macOS uses forward slashes (/)

## 📘 What I Learned

    -path.join() concatenates path segments using the correct separator for the specific OS
    -Hardcoding paths (e.g., 'dir/file') causes crashes when moving from local dev to servers
    -The function "normalizes" the string, fixing errors like double slashes or . segments 
    -Using path.join(__dirname, 'folder') is the standard for reliable absolute paths

## 🔐 Cybersecurity Insight

    -Improper path handling is the root cause of Directory Traversal attacks
    -Attackers exploit path separators (using \ instead of /) to bypass poor security filters
    -path.normalize() helps strip out malicious redundancy (like dir/../../etc/passwd)
    -Always validate user input before passing it to path.join() to prevent accessing unauthorized files
