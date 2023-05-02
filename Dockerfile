FROM node:18

COPY ./ ./

RUN npm install

WORKDIR /public

CMD [npm, run, docker-build]

