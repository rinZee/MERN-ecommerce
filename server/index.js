const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(3100, () => {
  console.log("server started on 3100");
});
