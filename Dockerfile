FROM node:14.16.1

RUN mkdir -p /app

WORKDIR /app

RUN npm install

COPY . /app

CMD npm start

EXPOSE 4000