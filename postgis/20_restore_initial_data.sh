#!/bin/bash
set -e

# Perform all actions as $POSTGRES_USER
export PGUSER="$POSTGRES_USER"

# Escape single quote from URL
DIRECTUS_URL=${DIRECTUS_URL//\'/\'\'}
SIPULAU_URL=${SIPULAU_URL//\'/\'\'}
UMAMI_URL=${UMAMI_URL//\'/\'\'}

echo "Restoring initial data into $POSTGRES_DB"
pg_restore -e -d "$POSTGRES_DB" -O /restore/sipulau.dump

echo "Updating image src in berita"
"${psql[@]}" --dbname="$POSTGRES_DB"<<- EOSQL
UPDATE berita
SET isi_idn = REPLACE(isi_idn, 'https://panel-sipulau.braga.co.id', '${DIRECTUS_URL}'),
    isi_eng = REPLACE(isi_eng, 'https://panel-sipulau.braga.co.id', '${DIRECTUS_URL}');
EOSQL

echo "Updating project url in directus_settings"
"${psql[@]}" --dbname="$POSTGRES_DB"<<- EOSQL
UPDATE directus_settings
SET project_url = '${SIPULAU_URL}',
    module_bar = '[{"type":"module","id":"collections","enabled":true},{"type":"module","id":"users","enabled":true},{"type":"module","id":"files","enabled":true},{"type":"module","id":"docs","enabled":false},{"type":"module","id":"upload-shapefile","enabled":true},{"type":"link","id":"YNUx98RwIcKmLIVqrTvek","name":"Statistics","url":"${UMAMI_URL}/share/tUMWIZSL/SIPULAU","icon":"assessment","enabled":true},{"type":"module","id":"settings","enabled":true,"locked":true}]';
EOSQL

echo "Creating and restoring umami database"
pg_restore -e -d "$POSTGRES_DB" -O -C /restore/umami.dump

echo "Updating website domain in umami database"
"${psql[@]}" --dbname=big_sipulau_umami<<- EOSQL
UPDATE website
SET domain = '${SIPULAU_URL#*//}';
EOSQL
