const responses = document.querySelectorAll("#res")

const iconsPlus = document.querySelectorAll("#plus")
const iconsMinor = document.querySelectorAll("#minor")


export function resToFaq(valor) {

    let res

    responses.forEach(elementRes => {

        res = elementRes.dataset.res

        if (res === valor) {

            responses[res].classList.add("show")
            iconsPlus[res].classList.add("notIcon")
            iconsMinor[res].classList.add("showIcon")
            responses[res].classList.remove("hidden")

        }
    })
}

export function resToFaqOccult(valor) {

    let res

    responses.forEach(elementRes => {

        res = elementRes.dataset.res

        if (res === valor) {

            if (iconsPlus[res].classList.contains("notIcon")) {

                iconsMinor[res].classList.remove("showIcon")

                iconsPlus[res].classList.remove("notIcon")
                iconsPlus[res].classList.add("showIcon")

                responses[res].classList.add("hidden")
                responses[res].classList.remove("show")

            }
        }
    })
}