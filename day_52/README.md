# 📅 **Day 50: Security – CORS (Cross-Origin Resource Sharing)**

Today, I explored **Cross-Origin Resource Sharing (CORS)**, a critical browser security mechanism that controls how web pages request resources from a different domain.

This topic bridges the gap between frontend and backend, explaining why browser errors occur when connecting a React app (on localhost:3000) to an Express API (on localhost:5000) and how to fix them securely.

## 🔍 Overview

    -The Problem:  Browsers enforce the Same-Origin Policy (SOP)  by default, which blocks scripts on one domain (origin) from reading data from another.
    -The Solution:  CORS is a protocol that allows servers to specify *who* (which origins) can access their assets.
     -It relies on HTTP headers (like `Access-Control-Allow-Origin`) to "relax" security rules safely.
     -It is not a bug; it is a security feature protecting users.

## 📘 What I Learned

    -Origin Definition:  An origin is defined by the combination of  Protocol  (http/https),  Domain , and  Port .
    -The Mechanism:  Browsers send a "Preflight" request (using the `OPTIONS` method) to ask the server permission before sending the actual data request.
    -Key Headers: 
    -`Access-Control-Allow-Origin`: Whitelists specific domains.
    -`Access-Control-Allow-Methods`: Specifies allowed HTTP verbs (GET, POST, etc.).
    -`Access-Control-Allow-Headers`: Lists allowed custom headers (like Authorization).


*  Implementation:  How to use the `cors` package in Express (`app.use(cors())`) to simplify configuration.

## 🔐 Cybersecurity Insight

    -Data Theft Prevention:  Without CORS/SOP, a malicious website could make an AJAX request to `bank.com` while you are logged in and read your transaction history.
    -The "*" Danger:  Setting `Access-Control-Allow-Origin: ` allows any site to access your API. This is fine for public data (like weather) but disastrous for private user data.
    -Credentials:  If passing cookies/tokens across domains, `Access-Control-Allow-Credentials` must be true, and the Origin cannot be `*`.
    -Misconfiguration:  Attackers look for APIs that dynamically mirror the `Origin` header in the response, effectively bypassing CORS protection.

