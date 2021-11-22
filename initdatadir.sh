#!/bin/sh

mkdir postgis/data
mkdir minio/data

chown 10001:10001 postgis/data
chown 10002:10001 minio/data
