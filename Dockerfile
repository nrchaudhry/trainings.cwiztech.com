# syntax=docker/dockerfile:1.4

# 1. For build React app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# 
COPY public/ /app/public
COPY src/ /app/src

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json


# Same as npm install
RUN npm install

CMD [ "npm", "start" ]