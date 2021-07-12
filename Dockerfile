FROM node:alpine

RUN mkdir -p /usr/src/hagglex && chown -R node:node /usr/src/hagglex

WORKDIR /usr/src/hagglex

COPY package.json package-lock.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8003