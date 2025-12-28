const path = require("path");

const BASE_DIR = path.resolve("public");

app.get("/file", (req, res) => {
  const requestedPath = path.resolve(BASE_DIR, req.query.name);

  if (!requestedPath.startsWith(BASE_DIR + path.sep)) {
    return res.status(403).send("Access denied");
  }

  res.sendFile(requestedPath);
});
