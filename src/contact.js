import "./contact.css"


function contact() {
    const content = document.querySelector("#content");
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    /* working hours */
    const workingHours = document.createElement("div");
    workingHours.classList.add("working-hours");
    const workingHoursHeader = document.createElement("h1");
    workingHoursHeader.classList.add("hours-header");
    workingHoursHeader.textContent = "Working Hours";
    const hoursUL = document.createElement("ul");
    const hoursList = makeHoursList();
    for (let i = 0; i < hoursList.length; i++) {
        const li = document.createElement("li");
        li.textContent = (hoursList[i]);
        hoursUL.appendChild(li);
    };
    workingHours.appendChild(workingHoursHeader);
    workingHours.appendChild(hoursUL);
    contactContainer.appendChild(workingHours)

    /* contact information */
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    const contactHeader = document.createElement("h1");
    contactHeader.classList.add("contact-header");
    contactHeader.textContent = "For reservations or questions, please contact: ";
    contactInfo.appendChild(contactHeader);
    const contactNum = document.createElement("p");
    contactNum.classList.add("contact-num");
    contactNum.textContent = "+65 6888 8888";
    contactInfo.appendChild(contactNum);
    const contactEmail = document.createElement("p");
    contactEmail.classList.add("contact-email");
    contactEmail.textContent = "definitelyrealemail@iamreal.com";
    contactInfo.appendChild(contactEmail);
    contactContainer.appendChild(contactInfo);
    content.appendChild(contactContainer);
}

function makeHoursList() {
    const arr = [];
    const monday = "Monday : 12pm-10pm";
    arr.push(monday);
    const tuesday = "Tuesday : 12pm-10pm";
    arr.push(tuesday);
    const wednesday = "Wednesday : 12pm-10pm";
    arr.push(wednesday);
    const thursday = "Thursday : 12pm-10pm";
    arr.push(thursday);
    const friday = "Friday : 12pm-10pm";
    arr.push(friday);
    const saturday = "Saturday : 12pm-10pm";
    arr.push(saturday);
    const sunday = "Sunday : 12pm-10pm";
    arr.push(sunday);
    return arr;
};

export {contact}