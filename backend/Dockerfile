FROM node:22-alpine AS build

WORKDIR /app

# 拷贝依赖
COPY package*.json ./
RUN npm install --production

# 拷贝代码
COPY . .

EXPOSE 8000

CMD ["npm", "start"]
