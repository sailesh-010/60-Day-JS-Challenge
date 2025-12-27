const fs = require("fs/promises");

async function readFile() {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.error("File not found:", error.message);
  }
}

readFile();
