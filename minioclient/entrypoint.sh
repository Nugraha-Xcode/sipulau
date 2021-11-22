#!/bin/sh

# wait minio initialize
sleep 15

mc config host add myminio http://minio:9000 "$MINIO_ROOT_USER" "$MINIO_ROOT_PASSWORD"

if mc ls myminio | grep -q "sipulau"; then
    echo "Bucket already exists, skipping create buckets and copy init files.."
else
    mc mb myminio/sipulau
    mc mb myminio/sipulau-shp
    # mc cp /initfiles/sipulau/ myminio/sipulau -r
    # mc cp /initfiles/sipulau-shp/ myminio/sipulau-shp -r
fi

exit 0
