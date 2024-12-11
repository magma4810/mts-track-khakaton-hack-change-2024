import { DropdownMenu } from "./DropdownMenu";
import "./SideBar.css";

export function SideBar(){
    
    const filters = ["Город","Должность","Роль","Подразделение"];
    return(
        <div className="sidenav">
            {filters.map(filterName => (
                <DropdownMenu key={filterName}>{filterName}</DropdownMenu>
            ))}
        </div>
    )
}
