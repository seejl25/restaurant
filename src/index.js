import "./homepage.js"
import { menu } from "./menu.js"
import { home } from "./homepage.js"

home();

const menuBtn = document.querySelector("#menu");
const content = document.querySelector("#content");

menuBtn.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    menu();
});

const homeBtn = document.querySelector("#home");

homeBtn.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    home();
});