# tkw-public-web
The Known World persistent Neverwinter Nights game server public website.

# Container Based Development
Developing the site using a docker container, will allow us to work on the site using the exact same machine that runs on production.

1. Download and install [Docker](https://docs.docker.com/engine/installation/) for your platform.

2. Clone this repo to a folder on your computer using git.

3. Change directory in your terminal to the repo folder just cloned.

4. Use NPM to install all dependencies.

```
npm install
```

5. Pull the following Docker image preloaded with Debian and Node. 

```
docker pull kidsysco/tkw-public-web
```

6. Run the docker image you just pulled. Be sure to execute the following command from the newly cloned repo folder! This command will use the Linux NFS to mount the folder on your filesystem to the path where the app normally runs inside the container. This effectively overwrites the app code in the container allowing your filesystem to provide instead.

```
Production:
docker run -p 80:8080 -d --restart always kidsysco/tkw-public-web:latest 

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

10. Commit your changes.

11. Push your changes or create a Merge Request.

12. The next time the production container is re-built, the latest code will be pulled from git.

# Updating the Development Container

docker build -t kidsysco/tkw-public-web .

