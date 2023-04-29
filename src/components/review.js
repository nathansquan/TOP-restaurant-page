class Review {
    constructor(publication, quote) {
        this.publication = publication;
        this.quote = quote;
    }

    loadReview() {
        const figure = document.createElement("figure");
        const blockquote = document.createElement("blockquote");
        const quote = document.createElement("p");
        quote.textContent = `${this.quote}`;

        const pub = document.createElement("figcaption");
        pub.textContent = `${this.publication}`;

        figure.appendChild(blockquote);
        figure.appendChild(pub);
        blockquote.appendChild(quote);

        return figure;
    }
}

export default Review;
