import "./style.css";
import { header } from "./header";
import { sidebar } from "./sidedar";
import { createNewCard } from "./cards";

const headerHTML = document.createElement("header");
const sidebarAndCards = document.createElement("div");
const sidebarHTML = document.createElement("div");
const divContainerCardsHTML = document.createElement("div");

sidebarHTML.className = "sidenav";
divContainerCardsHTML.className = "containerCards";
sidebarAndCards.className = "sidebarAndCards";

sidebarAndCards.append(sidebarHTML);
sidebarAndCards.append(divContainerCardsHTML);

document.body.append(headerHTML);
document.body.append(sidebarAndCards);

header(headerHTML);
sidebar(sidebarHTML);
createNewCard(divContainerCardsHTML);
