import { useState,createContext } from "react";
import PropTypes from 'prop-types';

export  const GetUsersInformationContext = createContext({
    informationAboutUsers: [],
    setInformationAboutUsers: null,
    isLoading: false,
    setIsLoading: null
});

export function GetUsersInformationProvider({children}){
    const [informationAboutUsers,setInformationAboutUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    return (
        <GetUsersInformationContext.Provider value={{
            informationAboutUsers,
            setInformationAboutUsers,
            isLoading,
            setIsLoading
        }}>
            {children}
        </GetUsersInformationContext.Provider>
    )
}

GetUsersInformationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};