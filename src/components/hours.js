class Hours {
    constructor(hours) {
        this.hours = hours; // hours should be an object
    }

    generateTable() {
        // creates a <table> element and a <tbody> element
        const tbl = document.createElement("table");
        const tblBody = document.createElement("tbody");

        const nDays = Object.values(this.hours).length;

        // creating all cells
        for (let i = 0; i < nDays; i++) {
            // creates a table row
            const row = document.createElement("tr");

            for (let j = 0; j < 2; j++) {
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
                const cell = document.createElement("td");

                if (j === 0) {
                    // get days of the week
                    cell.textContent = Object.keys(this.hours)[i];
                } else {
                    // get hours corresponding to that day
                    cell.textContent = Object.values(this.hours)[i];
                }

                row.appendChild(cell);
            }

            // add the row to the end of the table body
            tblBody.appendChild(row);
        }

        tbl.appendChild(tblBody);

        return tbl;
    }

    createHours() {
        const hoursDiv = document.createElement("div");
        hoursDiv.classList.add("hours");
        hoursDiv.textContent = "Hours";

        hoursDiv.appendChild(this.generateTable());

        return hoursDiv;
    }
}

export default Hours;
