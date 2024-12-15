#!/bin/bash
set -e

# Run Alembic migrations
alembic upgrade head

python load.py

# Start the Uvicorn server
exec uvicorn OrgAPI.server:app --reload --host ${APP_HOST:-0.0.0.0} --port ${APP_PORT:-8000}
