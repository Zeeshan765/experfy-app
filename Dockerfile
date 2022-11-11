FROM node:16.10.0-alpine
ARG DEPLOYMENT_ENV=develop
ARG ENV=development
ARG PORT=3000
ARG MONGODB_URI=mongodb://localhost:27017/itarp-career-portal-cms-service
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
RUN yarn generate:graphQLSchema
RUN yarn build
EXPOSE $PORT
CMD ["yarn", "serve"]
