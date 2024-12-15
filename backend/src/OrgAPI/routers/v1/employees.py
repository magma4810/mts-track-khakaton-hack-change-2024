from typing import List, Optional
from fastapi import APIRouter, Query, status, Depends

from OrgAPI.crud import EmployeeCRUD
from OrgAPI.dependencies import valid_employee_id
from OrgAPI.models import (
    Employee,
    EmployeeResponse,
    ResponseMessage,
)

router = APIRouter(
    prefix="/employees",
    tags=["Employees"],
)


@router.get(
    "/",
    summary="Get all employees with pagination.",
    status_code=status.HTTP_200_OK,
    response_model=List[EmployeeResponse],
)
async def get_employees_all(
    offset: int = Query(0, ge=0, description="Offset for pagination."),
    limit: int = Query(100, gt=0, le=100, description="Number of items to return."),
    crud: EmployeeCRUD = Depends(),
) -> List[EmployeeResponse]:
    return await crud.get_all(offset=offset, limit=limit)


@router.get(
    "/{id}",
    summary="Get an employee.",
    status_code=status.HTTP_200_OK,
    response_model=EmployeeResponse,
    responses={404: {"model": ResponseMessage}},
)
async def get_employee(
    employee: Employee = Depends(valid_employee_id),
) -> EmployeeResponse:
    return employee
