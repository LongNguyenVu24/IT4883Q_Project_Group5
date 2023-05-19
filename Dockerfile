FROM node:19.3.0

WORKDIR /app/Workmanage

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]