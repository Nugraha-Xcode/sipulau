FROM minio/minio:RELEASE.2021-09-18T18-09-59Z

RUN groupadd -g 10001 sipulaugroup
RUN useradd -u 10002 miniosipulau -G sipulaugroup

USER miniosipulau
