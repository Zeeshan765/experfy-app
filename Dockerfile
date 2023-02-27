<<<<<<< Updated upstream
# STAGE 1 - build app
FROM node:lts-alpine3.17 as base

FROM base as builder

ARG DEPLOYMENT_ENV=develop
ARG ENV=development
ARG PORT=3000
ARG MONGODB_URI=mongodb://localhost:27017/itarp-career-portal-cms-service-dev
ARG DB_PORT=27017
ARG PAYLOAD_PUBLIC_SERVER_URL="https://career-portal-cms.$DEPLOYMENT_ENV.experfy.com"
ENV ENV "$ENV"
ENV PORT "$PORT"
ENV MONGODB_URI "$MONGODB_URI"
ENV PAYLOAD_PUBLIC_SERVER_URL "$PAYLOAD_PUBLIC_SERVER_URL"
=======
FROM node:18-alpine as base

FROM base as builder

>>>>>>> Stashed changes
ENV APP_HOME /itarp-career-portal-cms-service

RUN apk update --no-cache && \
    apk add --no-cache git curl

WORKDIR $APP_HOME
COPY package*.json ./

COPY . .
<<<<<<< Updated upstream
RUN yarn install --save --legacy-peer-deps payload
RUN yarn generate:types
=======
RUN yarn install
>>>>>>> Stashed changes
RUN yarn build

FROM base as runtime

ENV NODE_ENV=production
<<<<<<< Updated upstream
ENV APP_HOME /itarp-career-portal-cms-service
ENV ENV "$ENV"
ENV PORT "$PORT"
ENV MONGODB_URI "$MONGODB_URI"
ENV PAYLOAD_PUBLIC_SERVER_URL "$PAYLOAD_PUBLIC_SERVER_URL"

WORKDIR $APP_HOME

COPY package*.json ./

RUN yarn install --production --save --legacy-peer-deps payload

COPY --from=builder $APP_HOME/dist ./dist
COPY --from=builder $APP_HOME/build ./build

EXPOSE $PORT

CMD ["node", "dist/server.js"]
=======

WORKDIR /home/node
COPY package*.json  ./

RUN apk add --no-cache git
RUN yarn install --production

COPY --from=builder /home/node/dist ./dist
COPY --from=builder /home/node/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]

>>>>>>> Stashed changes
