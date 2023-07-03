FROM node:16.14.0 as node

RUN npm init -y
RUN tsc --init
RUN npm install config dotenv express express-validator mongoose morgan winston

## dev dependencies
RUN npm install @types/config @types/express @types/mongoose @types/morgan @types/node ts-node-dev typescript --save-dev
