# 📅 Day 37: NPM (Node Package Manager)

This is my **Day 37** of the **JavaScript for Cybersecurity** journey.

Today, I learned about **NPM (Node Package Manager)** and how it manages dependencies and project configurations in Node.js.

---

## 🔍 Overview


    - NPM is the world's largest software registry and the default package manager for Node.js
    - It consists of a command-line interface (CLI) used to install and manage libraries
    - It helps in:
        - Dependency management
        - Project versioning
        - Automating development tasks through scripts
        - Sharing and reusing open-source code


---

## 📘 What I Learned

    - npm init is used to initialize a project and create the package.json file
    - package.json acts as a manifest, storing metadata, dependencies, and scripts
    - npm install downloads libraries into the node_modules directory
    - package-lock.json records the exact version of every dependency for consistency
    - Dependencies can be installed globally or locally to a specific project


---

## 🔐 Cybersecurity Insight

    - npm audit is a vital tool for identifying known vulnerabilities in dependencies
    - Supply chain attacks often target NPM through malicious or "poisoned" packages
    - Typosquatting involves attackers publishing packages with names similar to popular ones
    - Malicious pre-install/post-install scripts can execute code during the installation process
    - Committing package-lock.json ensures all environments use the exact same audited code

---