import "./style.css";
import { header } from "./header";
import { sidebar } from "./sidedar";

const headerHTML = document.createElement("header");
const sidebarHTML = document.createElement("div");
sidebarHTML.className = "sidenav";

document.body.append(headerHTML);
document.body.append(sidebarHTML);

header(headerHTML);
sidebar(sidebarHTML);
