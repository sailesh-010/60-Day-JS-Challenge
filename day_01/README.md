# Day 01 - JavaScript Basics: Variables and Console Output

## 🎯 Learning Objective

Learn the fundamentals of JavaScript variables and how to display output in the console.

## 📁 Project Structure

```
day_01/
├── README.md
├── index.html
├── index.js
└── image/
    ├── html.png
    ├── js.png
    └── output.png
```

## 📝 Code Files

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Day 01 - JS for 60 days</title>
    <script src="index.js" defer></script>
  </head>
  <body></body>
</html>
```

### index.js

```javascript
let name = "sailesh";
let age = 20;
console.log("Hello, my name is " + name + " and I am " + age + " years old.");
```

## 🧠 Key Concepts Learned

### Variables

- **`let`**: Used to declare variables that can be reassigned
- **String variables**: Text data enclosed in quotes (`"sailesh"`)
- **Number variables**: Numeric data without quotes (`20`)

### Console Output

- **`console.log()`**: Method to print output to the browser console
- **String concatenation**: Combining strings using the `+` operator

## 🚀 How to Run

1. Open `index.html` in your web browser
2. Open browser Developer Tools (F12)
3. Go to the Console tab
4. You should see the output: `"Hello, my name is sailesh and I am 20 years old."`

## 📸 Expected Output

The console will display:

```
Hello, my name is sailesh and I am 20 years old.
```

## 🔍 Code Breakdown

```javascript
let name = "sailesh";
let age = 20;
console.log("Hello, my name is " + name + " and I am " + age + " years old.");
```

## 💡 Tips for Beginners

- Always use quotes for string values
- Numbers don't need quotes
- Use `+` to combine strings and variables
- Check the browser console for output (F12 → Console tab)