#!/bin/bash

# These environment variables are consumed by the docker-compose file.
# We can supply explicit defaults that are checked in with source code 
# since they are only used for local development.
export SECRET_KEY=abc123
export DEBUG=True
export POSTGRES_DB=trektracker_db
export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=postgres

docker-compose -f docker-compose.dev.yml up -d --build

# make sure the postgres container is ready, then run migrations
sleep 10 
docker exec trektracker-api-1  python /src/manage.py makemigrations 
docker exec trektracker-api-1  python /src/manage.py migrate
docker exec trektracker-api-1  python /src/manage.py loaddata parks activities