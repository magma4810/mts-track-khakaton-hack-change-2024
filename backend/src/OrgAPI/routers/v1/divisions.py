from typing import List, Optional
from fastapi import APIRouter, Query, status, Depends

from OrgAPI.crud import DivisionCRUD
from OrgAPI.dependencies import valid_division_id
from OrgAPI.models import (
    DivisionResponse,
    Division,
    ResponseMessage,
)

router = APIRouter(
    prefix="/divisions",
    tags=["Divisions"],
)


@router.get(
    "/",
    summary="Get all divisions with pagination.",
    status_code=status.HTTP_200_OK,
    response_model=List[DivisionResponse],
)
async def get_employees_all(
    offset: int = Query(0, ge=0, description="Offset for pagination."),
    limit: int = Query(100, gt=0, le=100, description="Number of items to return."),
    crud: DivisionCRUD = Depends(),
) -> List[DivisionResponse]:
    return await crud.get_all(offset=offset, limit=limit)


@router.get(
    "/{id}",
    summary="Get a division.",
    status_code=status.HTTP_200_OK,
    response_model=DivisionResponse,
    responses={404: {"model": ResponseMessage}},
)
async def get_employee(
    division: Division = Depends(valid_division_id),
) -> DivisionResponse:
    return division
