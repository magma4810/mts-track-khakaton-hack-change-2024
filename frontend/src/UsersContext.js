import { createContext } from "react";

export const GetUsersInformationContext = createContext({
  informationAboutUsers: [],
  setInformationAboutUsers: null,
  isLoading: false,
  setIsLoading: null,
  value: "",
  setValue: null,
});
