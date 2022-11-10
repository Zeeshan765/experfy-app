FROM node:16.10.0-alpine
ARG ENV=development
ARG PORT=3000
ARG MONGODB_URI=mongodb://localhost:27017/itarp-career-portal-cms-service
ARG DB_PORT=27017
ENV ENV "$ENV"
ENV PORT "$PORT"
ENV MONGODB_URI "$MONGODB_URI"
ENV APP_HOME /itarp-career-portal-cms-service
WORKDIR $APP_HOME
COPY . .
RUN yarn install --save --legacy-peer-deps payload
RUN yarn generate:types
RUN yarn generate:graphQLSchema
RUN yarn dev
EXPOSE $PORT
CMD ["node", "src/server.ts"]