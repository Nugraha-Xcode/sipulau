# builder_deps
FROM node:14-alpine as builder_deps
WORKDIR /extensions
RUN npm update -g
ENV NODE_ENV development
COPY extensions/package*.json ./
RUN npm ci

# builder
FROM node:14-alpine as builder
WORKDIR /extensions
RUN npm update -g
ENV NODE_ENV development
COPY --from=builder_deps /extensions/node_modules ./node_modules
COPY extensions .
RUN npm run build

# runner
FROM directus/directus:9.0.1 as runner
WORKDIR /directus
# if using prebuilt:
# COPY extensions/dist extensions
# if using builder:
COPY --from=builder /extensions/dist extensions
