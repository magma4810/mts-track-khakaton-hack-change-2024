import { useEffect, useCallback } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { useGetUsersInformation } from "./hooks/useGetUsersInformation";
import "./App.css";

function App() {
  const { setInformationAboutUsers, setIsLoading } = useGetUsersInformation();

  const getInformation = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(
      "http://localhost:8080/api/v1/employees?offset=0&limit=100",
    ).then((users) => users.json());
    setInformationAboutUsers(response);
    setIsLoading(false);
  }, [setInformationAboutUsers, setIsLoading]);

  useEffect(() => {
    getInformation();
  }, [getInformation]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
