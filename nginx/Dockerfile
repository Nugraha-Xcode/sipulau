FROM nginx:1-alpine

COPY nginx.conf.template /etc/nginx/nginx.conf.template

COPY entrypoint.sh /
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
