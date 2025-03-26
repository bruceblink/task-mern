const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./connect/database");

// 数据库连接
connectDB();
const app = express();
// 添加json支持
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Server listening on ${port}`));

app.use("/api/tasks", require("./routes/taskRoutes"));
//添加 用户路由API
app.use("/api/users", require("./routes/userRoutes"));
// 添加错误处理的中间件
app.use(errorHandler);
