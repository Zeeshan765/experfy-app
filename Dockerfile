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
ENV APP_HOME /itarp-career-portal-cms-service

RUN apk update --no-cache && \
    apk add --no-cache git curl

WORKDIR $APP_HOME
COPY . .
RUN yarn install --save --legacy-peer-deps payload
RUN yarn generate:types
RUN yarn build

FROM base as runtime

ENV NODE_ENV=production
ENV APP_HOME /itarp-career-portal-cms-service
ENV ENV "$ENV"
ENV PORT "$PORT"
ENV MONGODB_URI "$MONGODB_URI"
ENV PAYLOAD_PUBLIC_SERVER_URL "$PAYLOAD_PUBLIC_SERVER_URL"

WORKDIR $APP_HOME

COPY package*.json ./

RUN yarn cache clean --all 

RUN yarn install --production --save --legacy-peer-deps payload

COPY --from=builder $APP_HOME/dist ./dist
COPY --from=builder $APP_HOME/build ./build

EXPOSE $PORT

CMD ["node", "dist/server.js"]