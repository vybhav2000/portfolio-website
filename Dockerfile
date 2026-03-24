FROM nginx:1.27-alpine

COPY index.html /usr/share/nginx/html/index.html
COPY projects.html /usr/share/nginx/html/projects.html
COPY assets /usr/share/nginx/html/assets

EXPOSE 80
