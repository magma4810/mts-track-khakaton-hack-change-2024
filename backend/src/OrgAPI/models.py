from datetime import datetime
import enum
from typing import Any, Dict
from uuid import UUID
from pydantic import (
    AliasChoices,
    AliasPath,
    ConfigDict,
    field_serializer,
)
from sqlmodel import Field, Relationship, SQLModel, Column, Enum
from OrgAPI.database import IdMixin
from pydantic_extra_types.phone_numbers import PhoneNumber

PhoneNumber.phone_format = "E164"


class ApiStatus(SQLModel):
    name: str = Field(...)
    version: str = Field(...)
    status: str = Field(...)
    message: str = Field(...)
    model_config = ConfigDict(
        json_schema_extra={
            "examples": [
                {
                    "name": "OrgAPI",
                    "version": "1.0.0",
                    "status": "OK",
                    "message": "Visit /swagger for documentation.",
                },
            ]
        }
    )


class ResponseMessage(SQLModel):
    detail: str


def field_example(param: Any) -> Dict[str, Dict[str, Any]]:
    """
    Returns field example for swagger documentation

    It's a workaround for SQLModel bug,
    see https://github.com/tiangolo/sqlmodel/discussions/833
    """
    return {"schema_extra": {"json_schema_extra": {"example": param}}}


class PositionBase(SQLModel):
    name: str = Field(nullable=False, **field_example("Директор управления"))


class Position(IdMixin, PositionBase, table=True):
    __tablename__ = "position"
    employees: list["Employee"] = Relationship(back_populates="position")


class PositionResponse(PositionBase):
    id: UUID


class RoleBase(SQLModel):
    name: str = Field(nullable=False, **field_example("Руководство"))


class Role(IdMixin, RoleBase, table=True):
    __tablename__ = "role"
    employees: list["Employee"] = Relationship(back_populates="role")


class RoleResponse(RoleBase):
    id: UUID


class EmployeeBase(SQLModel):
    name: str = Field(nullable=False, **field_example("Александр"))
    surname: str = Field(nullable=False, **field_example("Смирнов"))
    phone_number: PhoneNumber = Field(nullable=False, **field_example("+12124567890"))
    address: str = Field(
        nullable=False, **field_example("Москва, проспект Мира, 14, 3 этаж, офис 301")
    )


class Employee(IdMixin, EmployeeBase, table=True):
    __tablename__ = "employee"
    position_id: UUID = Field(foreign_key="position.id")
    role_id: UUID = Field(foreign_key="role.id")
    division_id: UUID = Field(foreign_key="division.id")

    position: Position = Relationship(back_populates="employees")
    role: Role = Relationship(back_populates="employees")
    division: "Division" = Relationship(back_populates="employees")


class EmployeeResponse(EmployeeBase):
    id: UUID
    position: PositionResponse
    role: RoleResponse
    division: "DivisionResponseInEmployee"


class DivisionBase(SQLModel):
    name: str = Field(nullable=False, **field_example("Центральный офис"))


class Division(IdMixin, DivisionBase, table=True):
    __tablename__ = "division"
    parent_id: UUID | None = Field(foreign_key="division.id")

    parent: "Division" = Relationship(
        back_populates="children",
        sa_relationship_kwargs=dict(remote_side="Division.id"),
    )
    children: list["Division"] = Relationship(back_populates="parent")
    employees: list["Employee"] = Relationship(back_populates="division")


class DivisionResponse(DivisionBase):
    id: UUID
    parent_id: UUID | None


class DivisionResponseInEmployee(DivisionBase):
    id: UUID
    parent_id: UUID | None
