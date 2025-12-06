This is my day 19 of JS for 60 days.

## overview
    In this lesson, we will learn about DOM Xss in JavaScript. DOM Xss stands for DOM Cross-Site Scripting and is a type of security vulnerability that occurs when untrusted user input is inserted into the DOM without proper sanitization. DOM Xss can allow attackers to inject malicious scripts into web pages, which can then be executed by users' browsers.

## topic covered:
    -DOM Xss
    -how to prevent DOM Xss.

## Preventation:
    -Sanitize user input: Always sanitize user input before inserting it into the DOM. Use encoding techniques such as HTML entity encoding to prevent malicious scripts from being executed.

    -Use secure coding practices: Follow secure coding practices to minimize the risk of DOM Xss. Avoid using eval(), setTimeout(), and setInterval() with untrusted user input.

    -Using .textContent instead of .innerHTML: When inserting user input into the DOM, use .textContent instead of .innerHTML. .textContent treats the input as plain text, while .innerHTML treats it as HTML. This means that any HTML tags in the input will be escaped and not executed as scripts.

    -Content Security Policy (CSP): Implement a Content Security Policy to restrict the sources from which scripts can be loaded. This can help prevent the execution of malicious scripts injected through DOM Xss.
