FROM node:latest 

MAINTAINER Dan Wahlin

ENV CONTAINER_PATH /var/www/angular2restfullservice

WORKDIR ${CONTAINER_PATH}

RUN npm install supervisor -g

EXPOSE 3000

ENTRYPOINT ["supervisor", "server.js"]


