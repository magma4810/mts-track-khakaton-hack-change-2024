import { useContext } from "react";
import { GetUsersInformationContext } from "../UsersContext";

export function useGetUsersInformation() {
  return useContext(GetUsersInformationContext);
}
