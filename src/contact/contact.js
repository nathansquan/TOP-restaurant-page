import Address from "../components/address.js";
import { createBanner } from "../components/createBanner.js";

class Contact {
    #addressObj = {
        street: "123 ABC Road",
        city: "Baltimore",
        state: "MD",
        zipcode: "12345",
    }

    constructor(address) {
        this.address = new Address(
            this.#addressObj.street,
            this.#addressObj.city,
            this.#addressObj.state,
            this.#addressObj.zipcode
        );
        //this.phone = phone;
        //this.hours = hours;
    }

    loadContact() {
        const content = document.getElementById("content");
        content.appendChild(createBanner());
        
        content.appendChild(this.address.createAddress());

    }
}

export default Contact;
