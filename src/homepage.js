import "./styles.css";
import burgerImage from "./burger.png";

function home() {

    const image = document.createElement("img");
    image.src = burgerImage;
    
    const headline = document.createElement("h1");
    headline.classList.add("headline")
    headline.textContent = "Grill n Thrill";
    
    const text = document.createElement("p");
    text.textContent = "When life gives you buns, make burgers."
    
    const div = document.querySelector("#content");
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    
    div.appendChild(image);
    textContainer.appendChild(headline);
    textContainer.appendChild(text);
    div.appendChild(textContainer);
    
    const logo = document.createElement("h1");
    logo.classList.add("logo");
    logo.textContent = "Grill n Thrill";
    const header = document.querySelector("header");
    header.appendChild(logo);
}

export {home}