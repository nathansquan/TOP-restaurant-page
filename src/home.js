import { createBanner, createTabBar } from "./createBanner";

function loadHome() {
    console.log('hi from home.js'); 
    const content = document.getElementById("content");

    content.appendChild(createBanner());
}

export default loadHome;
