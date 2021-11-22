#!/bin/sh
set -e

DIRECTUS_URL=${DIRECTUS_URL#*//}
SIPULAU_URL=${SIPULAU_URL#*//}
UMAMI_URL=${UMAMI_URL#*//}

envsubst '${DIRECTUS_URL} ${SIPULAU_URL} ${UMAMI_URL}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec "$@"
