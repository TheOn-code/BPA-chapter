

function dq(val) {
    return document.querySelector(val)
}

let close_mobile_nav = dq(".close");
let mobile_nav = dq(".mobile-popup")
let menu = dq(".menu")

close_mobile_nav.addEventListener("click", ()=> {
    mobile_nav.style.display = "none"
})

menu.addEventListener("click", () => {
    mobile_nav.style.display = "flex"
})

let time = 4000
let carousel_image = dq("#carousel-image")
let carousel = ["exec_board.jpeg", "random_group.JPG", "subway.jpg", "alex_dub.JPG", "group_on_stairs.JPG", "church.jpg", "weird_hand.jpg", "web_dub.JPG", "skyline.jpg", "steakhouse.jpg", "waffle.jpg"]
let carousel_left = dq(".carousel-left")
let carousel_right = dq(".carousel-right")
let carousel_id = setTimeout(function rotate() {
    carousel_image.style.opacity = "0";
    setTimeout(() => {shift_carousel_forward()}, 500)
    setTimeout(() => {carousel_image.style.opacity = "100"}, 500)
    carousel_id = setTimeout(rotate, time)
}, time)


function shift_carousel_forward() {
    carousel.push(carousel.shift())
    carousel_image.setAttribute("src", `images/carousel/${carousel[0]}`)
}

function shift_carousel_backwards() {
    carousel.unshift(carousel.pop())
    carousel_image.setAttribute("src", `images/carousel/${carousel[0]}`)
    clearInterval(carousel_id)
    let carousel_id = setInterval(shift_carousel_forward, time)
}

carousel_right.addEventListener("click", () => {
    shift_carousel_forward()
    clearInterval(carousel_id)
    carousel_id = setInterval(shift_carousel_forward, 5000)
})

carousel_left.addEventListener("click", () => {
    shift_carousel_backwards()
    clearInterval(carousel_id)
    carousel_id = setInterval(shift_carousel_forward, 5000)
})

