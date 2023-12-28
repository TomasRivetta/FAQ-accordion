import { resToFaq } from "./function/res.js";

const faqs = document.querySelectorAll("#faq")

faqs.forEach(element => {
    element.addEventListener("click", () => {
        resToFaq(element.dataset.faq)
    })
})