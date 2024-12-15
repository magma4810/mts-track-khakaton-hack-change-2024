import { useState,createContext } from "react";
import PropTypes from 'prop-types';

export  const GetUsersInformationContext = createContext({
    informationAboutUsers: [],
    setInformationAboutUsers: null,
    isLoading: false,
    setIsLoading: null,
    value: "",
    setValue: null
});

export function GetUsersInformationProvider({children}){
    const [informationAboutUsers,setInformationAboutUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [value, setValue] = useState('');
    return (
        <GetUsersInformationContext.Provider value={{
            informationAboutUsers,
            setInformationAboutUsers,
            isLoading,
            setIsLoading,
            value,
            setValue
        }}>
            {children}
        </GetUsersInformationContext.Provider>
    )
}

GetUsersInformationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};