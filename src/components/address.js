class Address {
    constructor(street, city, state, zipcode) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
    }

    createAddress() {
        const addressDiv = document.createElement("div");
        addressDiv.classList.add("address");
        const addressH2 = document.createElement("h2");
        addressH2.textContent = "Address";

        const addressLine1Div = document.createElement("div");
        addressLine1Div.classList.add("address-line-1");
        addressLine1Div.textContent = this.street;

        const addressLine2Div = document.createElement("div");
        addressLine2Div.classList.add("address-line-2");
        addressLine2Div.textContent = `${this.city}, ${this.state} ${this.zipcode}`;

        addressDiv.appendChild(addressH2);
        addressDiv.appendChild(addressLine1Div);
        addressDiv.appendChild(addressLine2Div);

        return addressDiv;
    }
}

export default Address;
