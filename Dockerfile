# This dockerfile is for development use.
# $ docker run -p 8080:8080 -d --mount type=bind,source="$(pwd)"/,target=/Users/KidSysco/Documents/Node/tkw-public-web-git/ kidsysco/tkw-public-web:latest

# Otherwise to build this container for dev purposes just use...
# $ docker build -t kidsysco/tkw-public-web .

FROM node:9.2.1

# Create app directory
# In development, you do not need to set this, you should be overwriting all of this code 
# using a NFS Bind Mount pointing to your local filessytem when running the image.
WORKDIR /Users/KidSysco/Documents/Node/tkw-public-web-git

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install pm2 -g

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD ["pm2-dev", "start", "pm-dev-process.json"]