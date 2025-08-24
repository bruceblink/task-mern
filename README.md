# MERN 全栈开发 step by step



## 项目简介
这是一个使用 MERN（MongoDB, Express, React, Node.js）技术栈进行全栈开发的项目。该项目旨在帮助开发者从零开始，逐步构建一个完整的最小可运行的 web 应用程序，项目包含用户注册、登录、登出，还有对数据库的基本增删改查等功能。

## 技术栈

- MongoDB
- Express.js
- React.js
- Node.js

## 安装与运行

1. 克隆仓库：
   ```bash
   git clone https://github.com/bruceblink/task-mern
   cd task-mern
2. 安装依赖：
   ```bash
   npm install
   ```
3. 启动开发服务器：
   ```bash
    npm start
   ```
4. 打开浏览器访问 `http://localhost:3000` 查看应用。

## 项目部署
本项目添加了 Docker/docker-compose 支持，可以方便地进行容器化部署。
1. 确保已安装 Docker 和 Docker Compose。
2. 在项目根目录下运行以下命令启动容器：
   ```bash
   docker-compose up -d --build
   ```
3. 访问 `http://localhost:3000` 查看应用。