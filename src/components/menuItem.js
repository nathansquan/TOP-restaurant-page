class MenuItem {
    constructor(itemName, pictureURL, description, price) {
        this.itemName = itemName;
        this.pictureURL = pictureURL;
        this.description = description;
        this.price = price;
    }

    createMenuItem() {
        const menuItemDiv = document.createElement("div");
        menuItemDiv.classList.add("menuItem");
        const menuItemH2 = document.createElement("h2");
        menuItemH2.textContent = `${this.itemName}`;

        const menuItemContentDiv = document.createElement("div");

        // image
        const menuItemPictureDiv = document.createElement("div");
        const menuItemPicture = new Image();
        menuItemPicture.src = this.pictureURL;
        menuItemPictureDiv.appendChild(menuItemPicture);

        // description
        const menuItemDescriptionDiv = document.createElement("div");
        menuItemDescriptionDiv.textContent = this.description;

        // price
        const menuItemPriceDiv = document.createElement("div");
        menuItemPriceDiv.textContent = `\$${this.price}`;

        menuItemContentDiv.appendChild(menuItemPictureDiv);
        menuItemContentDiv.appendChild(menuItemDescriptionDiv);
        menuItemContentDiv.appendChild(menuItemPriceDiv);

        menuItemDiv.appendChild(menuItemH2);
        menuItemDiv.appendChild(menuItemContentDiv);

        return menuItemDiv;
    }
}

export default MenuItem;
