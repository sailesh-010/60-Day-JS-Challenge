This is my day 8 of learning javascript from scratch as the part of the js for 60 days challenge.

Today, I learned about arrow functions in JavaScript.
Arrow functions provide a concise syntax for writing functions. They are often used for shorter functions and have some differences in behavior compared to traditional function expressions, particularly with regard to the `this` keyword.

It is important to note that arrow functions do not have their own `this` context. Instead, they inherit the `this` value from the enclosing scope. This can be useful in certain situations, but it also means that arrow functions are not suitable for methods that require their own `this` context, such as event handlers or methods that modify the object they are called on.

