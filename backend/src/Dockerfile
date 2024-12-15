
FROM python:3.11-slim AS builder

COPY requirements.txt requirements.txt

RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

COPY requirements_test.txt requirements_test.txt
ARG ENV
RUN if [ "$ENV" = "test" ]; then \
    pip install --no-cache-dir -r requirements_test.txt; \
    fi;

FROM python:3.11-slim AS app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

COPY --from=builder /usr/local /usr/local

ENV PATH=/usr/local/bin:$PATH

COPY OrgAPI/ /OrgAPI/OrgAPI/
COPY alembic/ /OrgAPI/alembic/
COPY scripts/ /OrgAPI/scripts/
COPY csv_data/ /OrgAPI/csv_data/
COPY alembic.ini main.py load.py /OrgAPI/

WORKDIR /OrgAPI

FROM app AS test

COPY tests/ /OrgAPI/tests/
COPY pytest.ini /OrgAPI/
