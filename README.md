# tkw-public-web
The Known World persistent Neverwinter Nights game server public website.

# Running The Container For Development Use
Developing the site using a docker container allows us to work on the site using the exact same machine that runs on production.

1. Download and install [Docker](https://docs.docker.com/engine/installation/) for your platform.

2. Clone this repo to a folder on your computer using git.

```
git clone https://github.com/KidSysco/tkw-public-web.git /app/path/
```

3. Change directory in your terminal to the repo folder just cloned.

4. Use NPM to install all dependencies.

```
npm install
```

5. Pull the following Docker image pre-loaded with Debian and Node. 

```
docker pull kidsysco/tkw-public-web:latest
```

6. Run the docker image you just pulled with params for development. This command will use the Linux NFS to mount a folder on your host filesystem to the path where the app normally runs inside the container, /app/. This effectively overwrites the app code in the container allowing your filesystem to provide instead. Replace the path in the target param to fit your workstation in the run command below. The -p switch specifies port mapping as follows: HostPort:ContainerPort.

```
Dev:
docker run -p 8080:8080 -d --mount type=bind,source="$(pwd)"/,target=/Users/KidSysco/Documents/Node/tkw-public-web-git/ kidsysco/tkw-public-web:latest

```

7. Open a web browser to http://localhost:8080

8. Open public/index.html and public/site.css. Edit these client-side files with you editor of choice. Save the changes. Refresh the browser to see the changes instantly.

9. Open server.js, remove comments from line 8, comment out line 7, and save. This will make a dramatic server side change you should notice when refreshing the browser. Below is the new code for server.js.

```
'use strict';

var express = require('express'),
    app = module.exports = express(),
    webServerPort = 8080;

//app.use(express.static('public'));
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(webServerPort);

console.log('Listening on port ' + webServerPort);

```

10. Make any changes needed to the code. Commit your changes. Push them to origin/master or create a merge request.

11. Push your changes or create a Merge Request.

12. The next time the production container is re-built, the latest code will be pulled from git.

# Running and Updating the Container for Production Use

1. Download and install [Docker](https://docs.docker.com/engine/installation/) for your platform.

2. Clone this repo to a folder on the production server using git.

```
git clone https://github.com/KidSysco/tkw-public-web.git /app/path/
```

3. Re-build the image to pull the latest source code from GitHub by running the following command from the app directory on the server.

```
docker build --no-cache --file production.dockerfile -t kidsysco/tkw-public-web .
```

4. Run the newly re-built image with params for production use. These examples map the container's port 8080 to the server's port 80.

```
Production Run & Restart Command: docker run -p 80:8080 -d --restart always kidsysco/tkw-public-web:latest 
Production Run Once Command: docker run -p 80:8080 -d kidsysco/tkw-public-web:latest 
```
# Updating The Container and Publishing to DockerHub.com

Try to keep the Latest version of the container on DockerHub.com configured for development use by default as that is the most common use for it. Special params must be specified for production use.

Otherwise, since the container is configured to pull the latest source code from GitHub, there is no NEED to push the container to DockerHub again. So this only provides a way to test that your container will build and run, which can still be done locally. Therefore this sequence of steps below will probably never be needed.

1. Follow all steps above for Running The Container For Development Use.

2. Make changes to Dockerfile for development configuration and production.dockerfile for production.

3. Re-build the container using the following command...

```
docker build -t kidsysco/tkw-public-web .
```

4. Test your container to ensure it works as expected for both production and development use.

5. If all tests pass, push the container to DockerHub.com.

```
docker push kidsysco/tkw-public-web
```

# Cleaning Up  
1. In order to delete all images, use the following command...
```
docker rmi $(docker images -q)
```

In order to delete all containers, use the following command...

```
docker rm $(docker ps -a -q)
```

Warning: This will destroy all your images and containers. It will not be possible to restore them!