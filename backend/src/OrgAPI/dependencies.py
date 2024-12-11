from uuid import UUID
from fastapi import Depends, HTTPException
from OrgAPI.crud import EmployeeCRUD, DivisionCRUD
from OrgAPI.models import Employee, Division


async def valid_employee_id(
    id: UUID,
    crud: EmployeeCRUD = Depends(),
) -> Employee:
    """
    Returns the employee instance matching the id if it exists.
    Raises a 404 if the employee does not exist.

    :param id: The id to match.
    :return: The employee instance.
    """
    employee = await crud.get_by_id(id=id)
    if not employee:
        raise HTTPException(status_code=404, detail=f"Employee {id} not found.")

    return employee


async def valid_division_id(
    id: UUID,
    crud: DivisionCRUD = Depends(),
) -> Division:
    """
    Returns the division instance matching the id if it exists.
    Raises a 404 if the division does not exist.

    :param id: The id to match.
    :return: The division instance.
    """
    division = await crud.get_by_id(id=id)
    if not division:
        raise HTTPException(status_code=404, detail=f"Division {id} not found.")

    return division
