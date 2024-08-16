# devopsnode

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

docker run -p 5000:5000 santoshmondal/devopsnode
```
