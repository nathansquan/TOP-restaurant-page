class Phone {
    constructor(number) {
        this.number = number;
    }

    createPhone() {
        const phoneDiv = document.createElement("div");
        phoneDiv.classList.add("phone");
        phoneDiv.textContent = "Phone";

        const phoneNumberDiv = document.createElement("div");
        phoneNumberDiv.classList.add("phone-number");
        phoneNumberDiv.textContent = this.number;

        phoneDiv.appendChild(phoneNumberDiv);

        return phoneDiv;
    }
}

export default Phone;
