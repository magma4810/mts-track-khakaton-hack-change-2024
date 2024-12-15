import { useGetUsersInformation } from "../../hooks/useGetUsersInformation";
import { NewCard } from "./NewCard";
import { SideBar } from "../SideBar/SideBar";

import "./Main.css"

export function Main(){


    const {informationAboutUsers,value,isLoading} = useGetUsersInformation();
    const hidePerson = informationAboutUsers.filter((person) => (person.name + " " + person.surname).toLowerCase().includes(value.toLowerCase()));
    return (
        <div className="main">
            <SideBar/>
            <div className="cardsContainer">
                {hidePerson.map((person) => (
                    <NewCard key={person.id} person={person}/>
                ))}
                {hidePerson.length === 0 && !isLoading && <div className="undefined">{`Совпадения не найдены :(`}</div>}
            </div>
        </div>
    )    
}

