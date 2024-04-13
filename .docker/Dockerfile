FROM node:lts-alpine3.19


WORKDIR /app

COPY . .
COPY package*.json ./

RUN yarn install --verbose

EXPOSE 3000

CMD ["npm", "run", "dev"]