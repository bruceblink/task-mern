const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

app.listen(port, () => console.log(`Server listening on ${port}`));

app.get("/api/tasks", (req, res) => {
  res.send("Get All Tasks");
});
