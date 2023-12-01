# develop stage
FROM node:lts-alpine as develop-stage
WORKDIR /app
COPY . .
RUN rm -rf packages/server

# build stage
FROM develop-stage as build-stage
WORKDIR /app/packages/client
RUN yarn
EXPOSE 4173
RUN yarn build
CMD [ "yarn", "preview" ]
