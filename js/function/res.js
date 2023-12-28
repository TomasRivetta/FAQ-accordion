const responses = document.querySelectorAll("#res")

const icons = document.querySelectorAll("img")

console.log(icons);

export function resToFaq(valor) {

    let res

    responses.forEach(elementRes => {

        res = elementRes.dataset.res

        if (res === valor) {

            responses[res].classList.remove("res")
            responses[res].classList.add("show")

        }
    })
}