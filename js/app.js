import { resToFaq, resToFaqOccult as resToFaqOccult } from "./function/res.js";

const faqs = document.querySelectorAll("#faq")

let num = 0;

faqs.forEach(element => {
    element.addEventListener("click", () => {

        if (num == 0) {
            resToFaq(element.dataset.faq)
            num++
        }
        else {
            resToFaqOccult(element.dataset.faq)
            num = 0
        }
    })
})