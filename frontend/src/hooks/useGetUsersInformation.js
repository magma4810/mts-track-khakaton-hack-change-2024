import { useContext } from "react";
import { GetUsersInformationContext } from "../components/GetUsersInformation";

export function useGetUsersInformation(){
    return useContext(GetUsersInformationContext);
}