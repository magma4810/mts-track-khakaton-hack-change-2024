import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GetUsersInformationProvider } from "./components/GetUsersInformation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GetUsersInformationProvider>
    <App />
    </GetUsersInformationProvider>

  </StrictMode>,
);
