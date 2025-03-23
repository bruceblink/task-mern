const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

app.listen(port, () => console.log(`Server listening on ${port}`));

app.use("/api/tasks", require("./routes/taskRoutes"));
