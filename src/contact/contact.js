import Address from "../components/address.js";
import { createBanner } from "../components/createBanner.js";
import Phone from "../components/phone.js";

class Contact {
    #addressObj = {
        street: "123 ABC Road",
        city: "Baltimore",
        state: "MD",
        zipcode: "12345",
    }

    #phoneNumber = "(123)-456-7890";

    constructor(address) {
        this.address = new Address(
            this.#addressObj.street,
            this.#addressObj.city,
            this.#addressObj.state,
            this.#addressObj.zipcode
        );
        this.phone = new Phone(this.#phoneNumber);
        //this.hours = hours;
    }

    loadContact() {
        const content = document.getElementById("content");
        content.appendChild(createBanner());
        
        content.appendChild(this.address.createAddress());
        content.appendChild(this.phone.createPhone());

    }
}

export default Contact;
