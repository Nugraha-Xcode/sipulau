# Build image
FROM node:14-alpine AS build
ARG POSTGRES_USER
ARG POSTGRES_PASSWORD
ARG POSTGRES_HOST
ARG POSTGRES_PORT
ARG POSTGRES_DB
ARG HASH_SALT
ARG BASE_PATH
ARG DATABASE_TYPE

ENV POSTGRES_USER=$POSTGRES_USER
ENV POSTGRES_PASSWORD=$POSTGRES_PASSWORD
ENV POSTGRES_HOST=$POSTGRES_HOST
ENV POSTGRES_PORT=$POSTGRES_PORT
ENV POSTGRES_DB=$POSTGRES_DB
ENV HASH_SALT=$HASH_SALT
ENV BASE_PATH=$BASE_PATH
ENV DATABASE_TYPE=$DATABASE_TYPE

ENV HTTP_PROXY="http://192.168.1.28:3128"
ENV HTTPS_PROXY="http://192.168.1.28:3128"

WORKDIR /build

RUN yarn config set --home enableTelemetry 0
COPY package.json yarn.lock /build/

# Install only the production dependencies
RUN yarn install --production --frozen-lockfile

# Cache these modules for production
RUN cp -R node_modules/ prod_node_modules/

# Install development dependencies
RUN yarn install --frozen-lockfile

COPY . /build
RUN yarn next telemetry disable
RUN yarn build
RUN ./gen_postgres_url.sh


# Production image
FROM node:14-alpine AS production
WORKDIR /app

# Copy generated .env file
COPY --from=build /build/.env.local .env.local

# Copy cached dependencies
COPY --from=build /build/prod_node_modules ./node_modules

# Copy generated Prisma client
COPY --from=build /build/node_modules/.prisma/ ./node_modules/.prisma/

COPY --from=build /build/yarn.lock /build/package.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public

USER node

EXPOSE 3000
CMD ["yarn", "start"]
