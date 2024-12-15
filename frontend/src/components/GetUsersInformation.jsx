import { useState } from "react";
import { GetUsersInformationContext } from "../UsersContext";
import PropTypes from "prop-types";

export function GetUsersInformationProvider({ children }) {
  const [informationAboutUsers, setInformationAboutUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  return (
    <GetUsersInformationContext.Provider
      value={{
        informationAboutUsers,
        setInformationAboutUsers,
        isLoading,
        setIsLoading,
        value,
        setValue,
      }}
    >
      {children}
    </GetUsersInformationContext.Provider>
  );
}

GetUsersInformationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
