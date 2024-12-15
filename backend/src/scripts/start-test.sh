#!/bin/bash
set -e

# Run Alembic migrations
alembic upgrade head

# Run tests
python -m pytest -s -vv --cov=OrgAPI --cov-report=html:./tests/htmlcov --cov-report=term --color=yes -p no:cacheprovider
