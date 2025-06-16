Ordem de Execução dos comandos para criar os containers interligados no docker

docker network create MomentusNetwork
docker run -d --name mysql --network MomentusNetwork -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=MomentusDB -p 3306:3306 mysql:8.0
docker run -d --name adminer  --network MomentusNetwork -p 3000:8080 adminer

clone o BackEnd, e Build ele com o DockerFile que ja existe la dentro

docker build -t backend:latest .
docker run -d --name backend --network minha-rede -p 8080:8080 backend:latest