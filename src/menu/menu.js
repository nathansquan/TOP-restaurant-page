class Menu {
    #menuArr = [
        {
            itemName: "G̉oi Cuốn",
            picture: "../menu/goi-cuon.jpg",
            description: "Vietnamese spring rolls with peanut dipping sauce",
            price: 5.00,
        },
        {
            itemName: "Phở Bò",
            picture: "../menu/pho-850px.jpg",
            description: "Fragrant beef noodle soup",
            price: 12.00,
        },
        {
            itemName: "Thịt Kho",
            picture: "../menu/thit-kho.jpg",
            description: "Braised pork",
            price: 10.00,
        },
    ]

    constructor() {
        this.menu = this.#menuArr;
    }
}
