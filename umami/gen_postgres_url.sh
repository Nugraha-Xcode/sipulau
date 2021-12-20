#!/bin/sh

POSTGRES_PASSWORD=${POSTGRES_PASSWORD//\'/\\\'}
POSTGRES_PASSWORD=$(node -e "console.log(encodeURIComponent('$POSTGRES_PASSWORD'));")
echo "DATABASE_URL=postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DB" > .env.local
echo "BASE_PATH=$BASE_PATH" >> .env.local
echo "HASH_SALT=$HASH_SALT" >> .env.local
