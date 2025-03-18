import "./menu.css"
import chickenBurger from "./chixburger.png"
import cheeseBurger from "./cheeseburger.png"
import shrimpBurger from "./shrimpburger.png"

function menu() {
    const menuContainer1 = document.createElement("div");
    menuContainer1.classList.add("menu-container");
    const menuItems1 = document.createElement("div");
    menuItems1.classList.add("menu-items");
    const image1 = document.createElement("img");
    image1.classList.add("food-image");
    image1.src = chickenBurger;
    const foodTitle1 = document.createElement("h1");
    foodTitle1.classList.add("food-title");
    foodTitle1.textContent = "Classic Crispy Chicken Burger"
    const foodDescription1 = document.createElement("p");
    foodDescription1.classList.add("food-description");
    foodDescription1.textContent = "Juicy chicken breast, golden-fried to perfection, topped with fresh lettuce, tomato, and our signature sauce"

    menuItems1.appendChild(image1);
    menuItems1.appendChild(foodTitle1);
    menuItems1.appendChild(foodDescription1);
    menuContainer1.appendChild(menuItems1);

    const menuContainer2 = document.createElement("div");
    menuContainer2.classList.add("menu-container");
    const menuItems2 = document.createElement("div");
    menuItems2.classList.add("menu-items");
    const image2 = document.createElement("img");
    image2.classList.add("food-image");
    image2.src = cheeseBurger;
    const foodTitle2 = document.createElement("h1");
    foodTitle2.classList.add("food-title");
    foodTitle2.textContent = "Classic Melt Cheeseburger"
    const foodDescription2 = document.createElement("p");
    foodDescription2.classList.add("food-description");
    foodDescription2.textContent = "Juicy beef patty, melted cheddar cheese, crisp lettuce, tomato, and house sauce on a toasted bun"

    menuItems2.appendChild(image2);
    menuItems2.appendChild(foodTitle2);
    menuItems2.appendChild(foodDescription2);
    menuContainer2.appendChild(menuItems2);

    const menuContainer3 = document.createElement("div");
    menuContainer3.classList.add("menu-container");
    const menuItems3 = document.createElement("div");
    menuItems3.classList.add("menu-items");
    const image3 = document.createElement("img");
    image3.classList.add("food-image");
    image3.src = shrimpBurger;
    const foodTitle3 = document.createElement("h1");
    foodTitle3.classList.add("food-title");
    foodTitle3.textContent = "Classic Crispy Shrimp Burger"
    const foodDescription3 = document.createElement("p");
    foodDescription3.classList.add("food-description");
    foodDescription3.textContent = "Juicy shrimp patty, golden-fried to perfection, topped with fresh slaw and zesty house sauce on a soft bun"

    menuItems3.appendChild(image3);
    menuItems3.appendChild(foodTitle3);
    menuItems3.appendChild(foodDescription3);
    menuContainer3.appendChild(menuItems3);

    const content = document.querySelector("#content");
    content.appendChild(menuContainer1);
    content.appendChild(menuContainer2);
    content.appendChild(menuContainer3);
}

export {menu}