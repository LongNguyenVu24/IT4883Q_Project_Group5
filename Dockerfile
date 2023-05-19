FROM node:19.3.0

WORKDIR /app

RUN cd /WorkManage

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]