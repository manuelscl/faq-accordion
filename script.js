const faqButton = document.querySelectorAll(".faq-accordion__question-button");
const accordionItems = document.getElementsByClassName("faq-accordion__item");


for(let i = 0; i < faqButton.length; i++) {
    faqButton[i].addEventListener("click", function () {
        const expanded = faqButton[i].getAttribute("aria-expanded") === "true";

        // Close all items except the actual item
        for(let j = 0; j < accordionItems.length; j++) {
            if(j !== i) {
                accordionItems[j].classList.remove("active");
                faqButton[j].setAttribute("aria-expanded", "false");

                console.log({i, j})
            }
        }

        // Toggle the actual item
        accordionItems[i].classList.toggle("active");
        faqButton[i].setAttribute("aria-expanded", !expanded);
    });
}