import { useEffect, useState } from "react"
import { MenuElement } from "./MenuElement"
import { useGetUsersInformation } from "../../hooks/useGetUsersInformation";
import PropTypes from 'prop-types';

export function DropdownMenu({children,...props}){

    const [cityes,setCityes] = useState([]);
    const [position,setPosition] = useState([]);
    const [role,setRole] = useState([]);
    const [division,setDivision] = useState([]);
    const {informationAboutUsers} = useGetUsersInformation();
    const [checkedItems, setCheckedItems] = useState({});


    function handleChange(item) {
        setCheckedItems((prev) => ({
            ...prev,
            [item]: !prev[item],
        }));
    }

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
            <button key={children} className="dropdown-btn" onClick={()=>props.toggleDropdown(children)}>{children}</button>  
            {props.active && <ul className="dropdown-menu">
                {children === "Город" && cityes.map(el => (
                    <MenuElement key={el} checked={checkedItems[el] || false} setСhecked={() => handleChange(el)}>{el}</MenuElement>
                ))}
                {children ==="Должность" && position.map(el => (
                    <MenuElement key={el} checked={checkedItems[el] || false} setСhecked={() => handleChange(el)}>{el}</MenuElement>
                ))}
                {children ==="Роль" && role.map(el => (
                    <MenuElement key={el} checked={checkedItems[el] || false} setСhecked={() => handleChange(el)}>{el}</MenuElement>
                ))}
                {children ==="Подразделение" && division.map(el => (
                    <MenuElement key={el} checked={checkedItems[el] || false} setСhecked={() => handleChange(el)}>{el}</MenuElement>
                ))}
            </ul>}

        </>
    )
}

DropdownMenu.propTypes = {
    children: PropTypes.node.isRequired,
};