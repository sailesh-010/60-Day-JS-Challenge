const fs = require("fs");

// Write "Hello, World!" to the file
fs.writeFileSync("test.txt", "Hello sailesh", "utf8");

fs.appendFileSync("test.txt", "\nAppended line.", "utf8");

try {
  const data = fs.readFileSync("test.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error("Error reading file:", err.message);
}

