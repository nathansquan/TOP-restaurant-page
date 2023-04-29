import { createBanner } from "../components/createBanner.js";
import Review from "../components/review.js";

class Home {
    #reviews = [
        {
            publication: "-Not the New York Times",
            quote: "With only three dishes on the menu, 'Taste of Vietnam' focuses on the mastery of these dishes"
        },
        {
            publication: "-The Baltimore Sunset",
            quote: "Simply the best Vietnamese food in Baltimore"
        },
        {
            publication: "-The Post of Washington",
            quote: "The best Vietnamese food in the D.C.-Baltimore area"
        },
    ]

    constructor() {
        this.reviews = this.#reviews;
    }

    loadHome() {
        const content = document.getElementById("content");
        content.appendChild(createBanner());

        const reviewH1 = document.createElement("h1");
        reviewH1.classList.add("reviewH1");
        reviewH1.textContent = "Reviews";
        content.appendChild(reviewH1);

        const reviewDiv = document.createElement("div");
        reviewDiv.classList.add("reviews");


        this.reviews.forEach(review => {
            const reviewQuote = new Review(
                review.publication,
                review.quote
            );
            reviewDiv.appendChild(reviewQuote.loadReview());
        });

        content.appendChild(reviewDiv);
    }
}

export default Home;
