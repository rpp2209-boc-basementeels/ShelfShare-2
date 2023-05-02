# declare the base image
FROM node:18

# copy files
COPY ./ ./

# install dependencies
RUN npm install

# declare working directory
WORKDIR /public

# run webpack build and server start
CMD [npm, run, docker-build]

