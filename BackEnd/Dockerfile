FROM node:22-alpine
WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package*.json ./

RUN npm install

RUN apk del python3 make g++

COPY . .

ENV NODE_ENV=production

EXPOSE 8080

CMD ["npm", "start"]
