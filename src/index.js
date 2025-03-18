import "./homepage.js"
import { menu } from "./menu.js"

const menuBtn = document.querySelector("#menu");
const content = document.querySelector("#content");

menuBtn.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    menu();
});