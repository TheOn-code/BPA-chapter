

let one = dq("#one")
let two = dq("#two")
let three = dq("#three")
let four = dq("#four")
let five = dq("#five")
let six = dq("#six")

function toggleDisplay(elem) {
    if (window.getComputedStyle(elem).display == "none" || elem.style.display == "none") {
        elem.style.display = "block"
        elem.previousElementSibling.children.item(1).textContent = "expand_less"
    } else {
        elem.style.display = "none"
        elem.previousElementSibling.children.item(1).textContent = "expand_more"
    }
}

one.addEventListener("click", () => {
    toggleDisplay(one.nextElementSibling)
})

two.addEventListener("click", () => {
    toggleDisplay(two.nextElementSibling)
})

three.addEventListener("click", () => {
    toggleDisplay(three.nextElementSibling)
})

four.addEventListener("click", () => {
    toggleDisplay(four.nextElementSibling)
})

five.addEventListener("click", () => {
    toggleDisplay(five.nextElementSibling)
})

six.addEventListener("click", () => {
    toggleDisplay(six.nextElementSibling)
})
