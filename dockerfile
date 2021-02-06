FROM nodebb/docker

RUN mkdir -p /.ssh
COPY ./hello.js /.ssh/

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

COPY . /usr/src/app/

EXPOSE 8080

CMD ["node", "hello.js"]
