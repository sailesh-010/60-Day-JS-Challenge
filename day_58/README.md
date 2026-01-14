# 📅 **Day 58: Connecting the Bridge (fetch)**

Today, I finalized the integration between the frontend and the backend. Now that my server can actually visit websites and scrape data (from Day 58), I needed to update the frontend to display this new information—specifically the **Page Title**—to the user.

This completes the loop: User Input  Server Processing  External Request  Server Response  UI Update.

## 🔍 Overview

    -The Goal: Update the `fetch()` logic to handle the richer data object returned by the server (which now includes `pageTitle`).
    -Dynamic UI: Instead of just showing "Safe" or "Unsafe," the UI now proves it visited the site by displaying its title.
    -Error Handling: Managing cases where the server fails to reach the site (e.g., displaying a user-friendly "Scan Failed" message).

## 📘 What I Learned

    -Consuming APIs: I learned how to destructure the JSON response (`const { pageTitle, status } = data`) to easily access specific pieces of information sent by the backend.
    -DOM Manipulation (Advanced): How to dynamically change CSS classes based on data. If `status === 'success'`, I turn the result text **green**. If it fails, I turn it **red**.
    -The `try...catch` block: Using this in the frontend to catch network errors (like if my own server is offline) and alert the user.

## 🔐 Cybersecurity Insight

    -Reflected XSS (Cross-Site Scripting): This is a critical lesson. If the website I scan has a malicious title like `<script>alert('Hacked')</script>`, and I use `innerHTML` to display it, that script acts on *my* page.
    -The Fix: Notice in the code above I used `titleElement.textContent = ...` instead of `innerHTML`. `textContent` treats the data strictly as text, neutralizing any HTML tags or scripts hidden inside the title.
    -Trust No One: Even though the data came from my own server, the *source* of that data was an external website. Always sanitize data before rendering it to the DOM