# FROM postgis/postgis:13-master
FROM postgis/postgis:14-3.1-alpine

RUN addgroup -g 10001 -S sipulaugroup
RUN adduser -u 10001 -S postgissipulau -G sipulaugroup

USER postgissipulau

# COPY 20_restore_initial_data.sh /docker-entrypoint-initdb.d/20_restore_initial_data.sh
