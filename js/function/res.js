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

        }

    })


}

// if(iconsPlus[res].classList.contains("notIcon")){
                
//     iconsPlus[res].classList.remove("notIcon")
//     iconsPlus[res].classList.add("showIcon")
//     iconsPlus[res].classList.add("faq-icon-plus")


//     iconsMinor[res].classList.remove("showIcon")
//     iconsPlus[res].classList.add("notIcon")

    
//     responses[res].classList.add("ocultar")
//     responses[res].classList.add("res")
//     responses[res].classList.remove("show")
// }