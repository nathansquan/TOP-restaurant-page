function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
    home.textContent = "Welcome to Vietnamese Restaurant";

    return home;
}

function loadHome() {
    console.log('hi from home.js'); 
    const content = document.getElementById("content");
    content.appendChild(createHome());
}

export default loadHome;
