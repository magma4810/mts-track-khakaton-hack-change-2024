import  { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { useGetUsersInformation } from "./hooks/useGetUsersInformation";
import "./App.css";



function App() {

  const {setInformationAboutUsers,setIsLoading} = useGetUsersInformation();


  async function getInformation() {
    setIsLoading(true);
    const response = fetch("http://localhost:8080/api/v1/employees?offset=0&limit=100")
    .then((users) => users.json());
    setInformationAboutUsers(await response);
    setIsLoading(false);
  }
  useEffect( () => {
    getInformation(); 
  },[]);

  return (
    <>
      <Header />
      <Main/>
    </>
  );
}

export default App;
