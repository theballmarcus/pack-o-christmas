FROM node:8.10.0-alpine 
WORKDIR /usr/app/
COPY package.json /usr/app/
RUN npm install --quiet
COPY ./bin/ ./public/ ./routes/ ./views/ ./config.json ./package-lock.json ./postgres.js ./run.sh ./server.js /usr/app/