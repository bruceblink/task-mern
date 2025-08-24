# 构建阶段
FROM node:22-alpine AS build
WORKDIR /app

# 拷贝依赖
COPY package*.json ./
RUN npm install

# 拷贝源码并打包
COPY . .
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
RUN npm run build

# 生产阶段用 Nginx 提供静态资源
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
