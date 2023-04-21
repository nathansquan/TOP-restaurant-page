function createTabBar() {
    const tabBar = document.createElement("div");
    tabBar.classList.add("tabBar");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("homeBtn");
    homeBtn.textContent = "Home";

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("menuBtn");
    menuBtn.textContent = "Menu";

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("contactBtn");
    contactBtn.textContent = "Contact";

    tabBar.appendChild(homeBtn);
    tabBar.appendChild(menuBtn);
    tabBar.appendChild(contactBtn);

    return tabBar;
}

function createBanner() {
    const banner = document.createElement("div");
    banner.classList.add("banner");

    const restaurantName = document.createElement("div");
    restaurantName.classList.add("restaurantName");
    restaurantName.textContent = "Taste of Vietnam";

    const tagLine = document.createElement("div");
    tagLine.classList.add("tagLine");
    tagLine.textContent = "Fresh regional dishes from across Vietnam";

    banner.appendChild(restaurantName);
    banner.appendChild(tagLine);
    banner.appendChild(createTabBar());

    return banner;
}


export { createBanner, createTabBar };
