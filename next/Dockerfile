# builder_deps
FROM node:14-alpine as builder_deps
ENV HTTP_PROXY="http://192.168.1.28:3128"
ENV HTTPS_PROXY="http://192.168.1.28:3128"
WORKDIR /app
# RUN npm update -g
ENV NODE_ENV development
COPY ./package*.json ./
RUN npm install -g npm && npm ci

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
ENV NODE_ENV production
ENV HTTP_PROXY="http://192.168.1.28:3128"
ENV HTTPS_PROXY="http://192.168.1.28:3128"
WORKDIR /app
# if using prebuilt:
# COPY package*.json ./
# RUN npm install -g npm && npm ci && npm i sharp
# COPY next.config.js ./
# COPY next-i18next.config.js ./
# COPY public ./public
# COPY .next ./.next
# if using builder:
COPY --from=builder_deps /app/node_modules ./node_modules
COPY ./package*.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/next-i18next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]
