import { createBanner, createTabBar } from "../components/createBanner.js";

function loadHome() {
    const content = document.getElementById("content");

    content.appendChild(createBanner());
}

export default loadHome;
