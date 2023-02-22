# STAGE 1 - build app
FROM node:lts-alpine3.17 as build

RUN apk update --no-cache && \
    apk add --no-cache git
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
WORKDIR $APP_HOME
COPY . .
RUN apk add --no-cache git
RUN yarn install --save --legacy-peer-deps payload
RUN yarn generate:types
RUN yarn build

# STAGE 2 - build the final image using a nginx web server
FROM nginx:1.21.3-alpine

COPY --from=build /itarp-career-portal-cms-service/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

EXPOSE $PORT

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]