import Address from "../components/address.js";
import { createBanner } from "../components/createBanner.js";
import Hours from "../components/hours.js";
import Phone from "../components/phone.js";

class Contact {
    #addressObj = {
        street: "123 ABC Road",
        city: "Baltimore",
        state: "MD",
        zipcode: "12345",
    }

    #phoneNumber = "(123)-456-7890";

    #hours = {
        sunday: "11:00 AM - 9:00 PM",
        monday: "Closed",
        tuesday: "11:00 AM - 9:00 PM",
        wednesday: "11:00 AM - 9:00 PM",
        thursday: "11:00 AM - 9:00 PM",
        friday: "11:00 AM - 9:00 PM",
        saturday: "11:00 AM - 9:00 PM",
    }

    constructor() {
        this.address = new Address(
            this.#addressObj.street,
            this.#addressObj.city,
            this.#addressObj.state,
            this.#addressObj.zipcode
        );
        this.phone = new Phone(this.#phoneNumber);
        this.hours = new Hours(this.#hours);
    }

    loadContact() {
        const content = document.getElementById("content");
        content.appendChild(createBanner());
        
        content.appendChild(this.address.createAddress());
        content.appendChild(this.phone.createPhone());
        content.appendChild(this.hours.createHours());
    }
}

export default Contact;
