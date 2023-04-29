import MenuItem from '../components/menuItem';
import { createBanner } from "../components/createBanner.js";
import GoiCuon from './goi-cuon.jpg';
import Pho from './pho-850px.jpg';
import ThitKho from './thit-kho.jpg';

class Menu {
    #menuArr = [
        {
            itemName: "G̉oi Cuốn",
            pictureURL: GoiCuon,
            description: "Vietnamese spring rolls with peanut dipping sauce",
            price: "5.00",
        },
        {
            itemName: "Phở Bò",
            pictureURL: Pho,
            description: "Fragrant beef noodle soup",
            price: "12.00",
        },
        {
            itemName: "Thịt Kho",
            pictureURL: ThitKho,
            description: "Braised pork",
            price: "10.00",
        },
    ]

    constructor() {
        this.menu = this.#menuArr;
    }

    loadMenu() {
        const content = document.getElementById("content");
        content.appendChild(createBanner());
        
        const menuDiv = document.createElement("div");
        menuDiv.classList.add("menu");

        const menuH1 = document.createElement("h1");
        menuH1.textContent = "Menu";
        menuDiv.appendChild(menuH1);

        this.menu.forEach(menuItem => {
            const item = new MenuItem(
                menuItem.itemName,
                menuItem.pictureURL,
                menuItem.description,
                menuItem.price
            );
            menuDiv.appendChild(item.createMenuItem());
        });

        content.appendChild(menuDiv);
    }
}

export default Menu;
