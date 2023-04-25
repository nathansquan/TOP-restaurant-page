class Phone {
    constructor(number) {
        this.number = number;
    }

    createPhone() {
        const phoneDiv = document.createElement("div");
        phoneDiv.classList.add("phone");

        const phoneH2 = document.createElement("h2");
        phoneH2.textContent = "Phone";

        const phoneNumberDiv = document.createElement("div");
        phoneNumberDiv.classList.add("phone-number");
        phoneNumberDiv.textContent = this.number;

        phoneDiv.appendChild(phoneH2);
        phoneDiv.appendChild(phoneNumberDiv);

        return phoneDiv;
    }
}

export default Phone;
