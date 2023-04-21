function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const restaurantName = document.createElement("div");
    restaurantName.classList.add("restaurantName");
    restaurantName.textContent = "Taste of Vietnam";

    const tagLine = document.createElement("div");
    tagLine.classList.add("tagLine");
    tagLine.textContent = "Fresh regional dishes from across Vietnam"

    home.appendChild(restaurantName);
    home.appendChild(tagLine);
    return home;
}

function loadHome() {
    console.log('hi from home.js'); 
    const content = document.getElementById("content");
    content.appendChild(createHome());
}

export default loadHome;
