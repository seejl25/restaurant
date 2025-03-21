import "./homepage.js"
import { menu } from "./menu.js"
import { home } from "./homepage.js"
import { contact } from "./contact.js";

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
    const header = document.querySelector("header");
    const logo = document.querySelector(".logo")
    header.removeChild(logo);
    home();
});

const contactBtn = document.querySelector("#contact");

contactBtn.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    contact();
})