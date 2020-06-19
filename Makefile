include .env


up: # create and start containers
	@docker-compose -f ${DOCKER_CONFIG} up -d

down: # stop and destroy containers
	@docker-compose -f ${DOCKER_CONFIG} down

down-volume: #  WARNING: stop and destroy containers with volumes
	@docker-compose -f ${DOCKER_CONFIG} down -v

build: # build containers
	@docker-compose -f ${DOCKER_CONFIG} build

ps: # show started containers and their status
	@docker-compose -f ${DOCKER_CONFIG} ps

connect_server: # node command line
	@docker-compose -f ${DOCKER_CONFIG} exec  -w /www/ server bash

connect_mongo: # node command line
	@docker-compose -f ${DOCKER_CONFIG} exec mongo bash