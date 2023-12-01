# develop stage
FROM node:lts-alpine as develop-stage
WORKDIR /app
COPY . .
RUN rm -rf packages/client

# build stage
FROM develop-stage as build-stage
WORKDIR /app/packages/server
RUN yarn
EXPOSE 3001
RUN yarn build
CMD [ "yarn", "start" ]
