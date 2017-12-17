# To run the container in development mode use...
# Production Run & Restart Command: docker run -p 80:8080 -d --restart always kidsysco/tkw-public-web:latest 
# Production Run Once Command: docker run -p 80:8080 -d kidsysco/tkw-public-web:latest 

# To build this container for production purposes use...
# Build Command: docker build --no-cache --file production.dockerfile -t kidsysco/tkw-public-web .

FROM node:9.2.1

# Set the app working directory inside the container.
WORKDIR /app

RUN git clone https://github.com/KidSysco/tkw-public-web.git /app/

RUN npm install pm2 -g

# Use the production flag
RUN npm install --only=production

EXPOSE 8080

CMD ["pm2-docker", "start", "pm-docker-process.json"]