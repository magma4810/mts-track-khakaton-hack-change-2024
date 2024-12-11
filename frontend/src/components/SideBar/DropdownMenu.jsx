import { useEffect, useState } from "react"
import { MenuElement } from "./MenuElement"
import { useGetUsersInformation } from "../../hooks/useGetUsersInformation";
import PropTypes from 'prop-types';

export function DropdownMenu({children}){
    const [active,setActive] = useState(false);
    const [cityes,setCityes] = useState([]);
    const [position,setPosition] = useState([]);
    const [role,setRole] = useState([]);
    const [division,setDivision] = useState([]);
    const {informationAboutUsers} = useGetUsersInformation();

    useEffect(() => {
        const cityes = [...new Set(informationAboutUsers.map(city => city.address.split(",")[0]))];
        setCityes(cityes);
        const position = [...new Set(informationAboutUsers.map(el => (el.position.name)))];
        setPosition(position);
        const role = [...new Set(informationAboutUsers.map(el => (el.role.name)))];
        setRole(role);
        const division = [...new Set(informationAboutUsers.map(el => (el.division.name)))];
        setDivision(division);
    },[informationAboutUsers])

    return(
        <>
            <button className="dropdown-btn" onClick={()=>setActive(!active)}>{children}</button>
            <ul className="dropdown-menu">
                {active && children==="Город" && cityes.map(el => (
                    <MenuElement key={el}>{el}</MenuElement>
                ))}
                {active && children==="Должность" && position.map(el => (
                    <MenuElement key={el}>{el}</MenuElement>
                ))}
                {active && children==="Роль" && role.map(el => (
                    <MenuElement key={el}>{el}</MenuElement>
                ))}
                {active && children==="Подразделение" && division.map(el => (
                    <MenuElement key={el}>{el}</MenuElement>
                ))}
            </ul>

        </>
    )
}

DropdownMenu.propTypes = {
    children: PropTypes.node.isRequired,
};