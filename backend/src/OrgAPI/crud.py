from typing import Any, Generic, List, Type, TypeVar
from uuid import UUID
from fastapi import Depends
from pydantic import BaseModel
from sqlmodel import SQLModel
from sqlalchemy import Select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.sql.expression import select
from sqlalchemy.orm import selectinload
from functools import reduce

from OrgAPI.database import Transactional, get_session
from OrgAPI.models import Division, Employee

ModelType = TypeVar("ModelType", bound=SQLModel)


class BaseCRUD(Generic[ModelType]):
    """Base class for CRUD operations."""

    def __init__(self, model: Type[ModelType], session: AsyncSession):
        self.session = session
        self.model_class = model

    @Transactional()
    async def create(self, model_create: ModelType) -> ModelType:
        """
        Creates a new Object in the DB.

        :param model_create: The model containing the attributes to create an entity with.
        :return: The created object.
        """
        attributes = self.extract_attributes_from_schema(model_create)
        model = self.model_class(**attributes)
        self.session.add(model)
        return model

    async def get_by_id(self, id: UUID, join_: set[str] | None = None) -> ModelType:
        """
        Returns the model instance matching the id.

        :param id: The id to match.
        :param join_: The joins to make.
        :return: The model instance.
        """
        return await self._one_or_none(self._where(self._query(join_), "id", id))

    async def get_all(
        self, offset: int, limit: int, join_: set[str] | None = None
    ) -> List[ModelType] | None:
        """
        Returns all model instances.

        :param offset: The offset to start from.
        :param limit: The number of items to return.
        :return: The list of model instances.
        """
        return await self._all(self._query(join_).offset(offset).limit(limit))

    async def get_all_by_ids(
        self, ids: list[UUID], join_: set[str] | None = None
    ) -> ModelType:
        """
        Returns the model instances matching the ids.

        :param ids: The ids to match.
        :param join_: The joins to make.
        :return: The model instances.
        """
        return await self._all(self._where(self._query(join_), "id", ids))

    @Transactional()
    async def update(self, model: ModelType, model_update: ModelType) -> ModelType:
        """
        Updated the model instance.

        :param model: The model to update.
        :param model_update: The model containing the attributes to update.
        :return: The updated model instance.
        """
        attributes: dict[str, Any] = self.extract_attributes_from_schema(model_update)
        for k, v in attributes.items():
            setattr(model, k, v)
        self.session.add(model)
        return model

    @Transactional()
    async def delete(self, model: ModelType) -> None:
        """
        Deletes the model.

        :param model: The model to delete.
        :return: None
        """
        await self.session.delete(model)

    def _query(self, join_: set[str] | None = None) -> Select:
        """
        Returns a callable that can be used to query the model.

        :param join_: The joins to make.
        :return: A callable that can be used to query the model.
        """
        query = select(self.model_class)
        query = self._optional_join(query, join_)

        return query

    async def _all(self, query: Select) -> list[ModelType]:
        """
        Returns all results from the query.

        :param query: The query to execute.
        :return: A list of model instances.
        """
        query = await self.session.scalars(query)
        return query.all()

    async def _one_or_none(self, query: Select) -> ModelType | None:
        """Returns the first result from the query or None.

        :param query: The query to execute.
        :return: The model instance or None.
        """
        query = await self.session.scalars(query)
        return query.one_or_none()

    def _where(self, query: Select, field: str, value: Any) -> Select:
        """
        Returns the query filtered by the given column.

        :param query: The query to filter.
        :param field: The column to filter by.
        :param value: The value to filter by.
        :return: The filtered query.
        """
        if isinstance(value, (list, tuple)):
            return query.where(getattr(self.model_class, field).in_(value))
        else:
            return query.where(getattr(self.model_class, field) == value)

    def _optional_join(self, query: Select, join_: set[str] | None = None) -> Select:
        """
        Returns the query with the given joins.

        :param query: The query to join.
        :param join_: The joins to make.
        :return: The query with the given joins.
        """
        if not join_:
            return query

        if not isinstance(join_, set):
            raise TypeError("join_ must be a set")

        return reduce(self._add_join_to_query, join_, query)

    def _add_join_to_query(self, query: Select, join_: set[str]) -> Select:
        """
        Returns the query with the given join.

        :param query: The query to join.
        :param join_: The join to make.
        :return: The query with the given join.
        """
        return getattr(self, "_join_" + join_)(query)

    @staticmethod
    def extract_attributes_from_schema(
        schema: BaseModel, excludes: set = None
    ) -> dict[str, Any]:
        """
        Extracts the attributes from the schema.

        :param schema: The schema to extract the attributes from.
        :param excludes: The attributes to exclude.
        :return: The attributes.
        """

        return schema.model_dump(exclude=excludes, exclude_unset=True)


class EmployeeCRUD(BaseCRUD[Employee]):
    """
    CRUD for the employee model.
    """

    def __init__(self, session: AsyncSession = Depends(get_session)):
        super().__init__(model=Employee, session=session)

    async def get_by_id(self, id: UUID) -> ModelType:
        """
        Returns the employee instance matching the id.

        :param id: The id to match.
        :return: The employee instance.
        """
        return await super().get_by_id(id=id, join_={"position", "role", "division"})

    async def get_all(self, offset: int, limit: int) -> List[ModelType]:
        """
        Returns all employee instances.

        :param offset: The offset to start from.
        :param limit: The number of items to return.
        :return: The list of employee instances.
        """
        return await super().get_all(
            offset=offset, limit=limit, join_={"position", "role", "division"}
        )

    def _join_position(self, query: Select) -> Select:
        """
        Joins position table.

        :param query: The query to join.
        :return: Query.
        """
        return query.options(selectinload(Employee.position))

    def _join_role(self, query: Select) -> Select:
        """
        Joins role table.

        :param query: The query to join.
        :return: Query.
        """
        return query.options(selectinload(Employee.role))

    def _join_division(self, query: Select) -> Select:
        """
        Joins division table.

        :param query: The query to join.
        :return: Query.
        """
        return query.options(selectinload(Employee.division))


class DivisionCRUD(BaseCRUD[Division]):
    """
    CRUD for the division model.
    """

    def __init__(self, session: AsyncSession = Depends(get_session)):
        super().__init__(model=Division, session=session)

    async def get_by_id(self, id: UUID) -> ModelType:
        """
        Returns the division instance matching the id.

        :param id: The id to match.
        :return: The division instance.
        """
        return await super().get_by_id(id=id, join_={"employee"})

    async def get_all(self, offset: int, limit: int) -> List[ModelType]:
        """
        Returns all employee instances.

        :param offset: The offset to start from.
        :param limit: The number of items to return.
        :return: The list of division instances.
        """
        return await super().get_all(offset=offset, limit=limit, join_={"employee"})

    def _join_employee(self, query: Select) -> Select:
        """
        Joins employee table.

        :param query: The query to join.
        :return: Query.
        """
        return query.options(selectinload(Division.employees))
