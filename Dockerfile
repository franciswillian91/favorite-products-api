FROM node:22-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV NODE_ENV=test

RUN npm run build
EXPOSE 3000

# CMD ["node","dist/server.js"]

CMD npx typeorm migration:run -d dist/config/database.js && npm run seed && node dist/server.js
