FROM node:12
WORKDIR /src
COPY package*.json /src/
RUN npm i --production
COPY server.js routes.js index.html /src/
CMD npm start
