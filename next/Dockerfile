# builder_deps
FROM node:14-alpine as builder_deps
WORKDIR /app
RUN npm update -g
ENV NODE_ENV development
COPY ./package*.json ./
RUN npm ci

# builder
FROM node:14-alpine as builder
ARG NEXT_PUBLIC_UMAMI_URL
ARG NEXT_PUBLIC_DIRECTUS_URL
ENV NEXT_PUBLIC_UMAMI_URL=${NEXT_PUBLIC_UMAMI_URL}
ENV NEXT_PUBLIC_DIRECTUS_URL=${NEXT_PUBLIC_DIRECTUS_URL}
ENV NEXT_TELEMETRY_DISABLED 1
WORKDIR /app
COPY --from=builder_deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# runner
FROM node:14-alpine as runner
RUN apk add dumb-init
RUN npm update -g
ENV NODE_ENV production
WORKDIR /app
# if using prebuilt:
# COPY package*.json ./
# COPY next.config.js ./
# COPY public ./public
# COPY .next ./.next
# RUN npm ci
# RUN npm i sharp
# if using builder:
COPY --from=builder_deps /app/node_modules ./node_modules
COPY ./package*.json ./
RUN npm i sharp --no-package-lock --no-audit --no-fund
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

CMD ["dumb-init", "npm", "start"]
