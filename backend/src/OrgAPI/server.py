from fastapi import FastAPI

from OrgAPI.routers import api_router, status_router
from OrgAPI.config import settings


def get_application() -> FastAPI:
    app = FastAPI(
        title=settings.PROJECT_NAME,
        version=settings.VERSION,
        docs_url="/swagger",
    )
    app.include_router(api_router, prefix="/api")
    app.include_router(status_router)
    return app


app = get_application()
