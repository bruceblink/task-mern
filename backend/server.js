const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const connectDB = require("./connect/database");

connectDB();
const app = express();

// JSON 支持
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 路由注册
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// 错误处理中间件
app.use(errorHandler);

// 监听端口，放在所有路由后面
const port = process.env.PORT || 5000;
app.listen(port, "0.0.0.0", () => console.log(`Server listening on ${port}`));