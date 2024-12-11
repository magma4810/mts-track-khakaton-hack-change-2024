import  { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { useGetUsersInformation } from "./hooks/useGetUsersInformation";
import "./App.css";



function App() {

  const {setInformationAboutUsers,setIsLoading} = useGetUsersInformation();


  async function getInformation() {
    setIsLoading(false);
    const response = fetch("http://localhost:8080/api/v1/employees?offset=0&limit=100")
    .then((users) => users.json());
    setInformationAboutUsers(await response);
    setIsLoading(true);
  }
  useEffect( () => {
    getInformation();  
  });

  return (
    <>

      <Header />
      <SideBar/>

    </>
  );
}

export default App;
