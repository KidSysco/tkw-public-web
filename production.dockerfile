# This dockerfile is for production use.
# Build Command: docker build --file production.dockerfile -t kidsysco/tkw-public-web .
# Run Command: docker run -p 80:8080 -d --restart always kidsysco/tkw-public-web:latest 

FROM node:9.2.1

# Create app directory
# Clone the git repo to the production server.
# Set this to the app path on the server.
#WORKDIR /Users/KidSysco/Documents/Node/tkw-public-web-git

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install pm2 -g

# Use the production flag
RUN npm install --only=production

# Bundle app source
RUN git clone https://github.com/KidSysco/tkw-public-web.git /Users/KidSysco/Documents/Node/tkw-public-web-git
#COPY . .

EXPOSE 8080
CMD ["pm2-docker", "start", "pm-docker-process.json"]