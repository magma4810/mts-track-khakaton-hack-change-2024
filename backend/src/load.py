from OrgAPI.models import Division, Employee, Position, Role
from OrgAPI.database import get_session
import csv


async def load():
    async for session in get_session():
        positions = {}
        roles = {}
        divisions = {}
        with open("csv_data/positions.csv", "r") as f:
            for line in f.readlines():
                pos = Position(name=line.strip())
                session.add(pos)
                positions[pos.name] = pos.id
        with open("csv_data/roles.csv", "r") as f:
            for line in f.readlines():
                role = Role(name=line.strip())
                session.add(role)
                roles[role.name] = role.id
        with open("csv_data/divisions.csv", "r") as f:
            for line in f.readlines():
                num, name, parent = line.strip().split(",")
                parent_id = divisions.get(parent, None)
                div = Division(name=name, parent_id=parent_id)
                session.add(div)
                divisions[num] = div.id
        with open("csv_data/employees.csv", "r", newline="") as f:
            reader = csv.reader(f, quotechar='"', delimiter=",")
            for row in reader:
                name, surname, phone_number, position, role, division, address = row
                session.add(
                    Employee(
                        name=name,
                        surname=surname,
                        phone_number=phone_number,
                        position_id=positions[position],
                        role_id=roles[role],
                        division_id=divisions[division],
                        address=address,
                    )
                )
        await session.commit()


if __name__ == "__main__":
    import asyncio

    asyncio.run(load())
