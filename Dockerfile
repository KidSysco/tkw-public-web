# This dockerfile is for development use.

# To run the container in development mode use...
# $ docker run -p 8080:8080 -d --mount type=bind,source="$(pwd)"/,target=/Users/KidSysco/Documents/Node/tkw-public-web-git/  kidsysco/tkw-public-web:latest

# To build this container for dev purposes use...
# $ docker build -t kidsysco/tkw-public-web .

FROM node:9.2.1

# Set the app working directory inside the container.
WORKDIR /app

RUN git clone https://github.com/KidSysco/tkw-public-web.git /app/

RUN npm install pm2 -g

RUN npm install

EXPOSE 8080

CMD ["pm2-dev", "start", "pm-dev-process.json"]