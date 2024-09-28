# devopsnode

### Reference Documentation

Public Url to Test After deployment : Nodejs Port : 3000

```
http://IP_ADDRESS:PORT/nodejs-service/first/
http://IP_ADDRESS:PORT/nodejs-service/first/hello
http://IP_ADDRESS:PORT/nodejs-service/first/health
http://IP_ADDRESS:PORT/nodejs-service/first/list
http://IP_ADDRESS:PORT/nodejs-service/first/map

```

-- while checking locally
docker build -t devopsnode .
docker run -p 3000:3000 devopsnode

-- whileing pushing to dockerhub
docker login
docker buildx create --use
docker buildx inspect --bootstrap

docker buildx build --platform linux/amd64,linux/arm64 -t santoshmondal/devopsnode:latest --push .
docker buildx build --platform linux/amd64,linux/arm64 -t santoshmondal/devopsnode:1.0.0 --push .

docker run -p 3000:3000 santoshmondal/devopsnode

```

```
