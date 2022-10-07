

function dq(val) {
    return document.querySelector(val)
}

function dqa(val) {
    return document.querySelectorAll(val)
}

function ce(val) {
    return document.createElement(val)
}

let close_mobile_nav = dq(".close");
let mobile_nav = dq(".mobile-popup")
let menu = dq(".mobile")

close_mobile_nav.addEventListener("click", ()=> {
    mobile_nav.style.display = "none"
})

menu.addEventListener("click", () => {
    mobile_nav.style.display = "block"
})

cta = dq(".cta")
hr = dq("hr")
cta.addEventListener("click", () => {
    cta.scrollIntoView()
    // window.scrollBy(0,-70)
})


let carousel_left = dq(".carousel-left")
let carousel_right = dq(".carousel-right")
let carousel_img_container = dq(".carousel-img-container")
let carousel_filenames = ["exec_board.png", "random_group.png", "subway.png", "alex_dub.png", "group_on_stairs.png", "church.png", "weird_hand.png", "web_dub.png", "skyline.png", "steakhouse.png", "waffle.png"]
let carousel = []
let time = 4000

function begin_carousel() {
    return setInterval(() => {
        shift_carousel_forward()
    }, time)
}
timerId = begin_carousel()

carousel_filenames.forEach((val) => {
    let img = ce("img")
    img.classList.add("carousel-img")
    img.src = `images/carousel/${val}`
    img.style.opacity = "0"
    carousel.push(img)
})

carousel.forEach((val) => {
    carousel_img_container.append(val)
})

carousel[0].style.opacity = "100"

function shift_carousel_forward() {
    carousel[0].style.opacity = "0";
    carousel.push(carousel.shift())
    carousel[0].style.opacity = "100"
}

function shift_carousel_backwards() {
    carousel[0].style.opacity = "0";
    carousel.unshift(carousel.pop())
    carousel[0].style.opacity = "100"
}

carousel_right.addEventListener("click", () => {
    shift_carousel_forward()
    clearInterval(timerId)
    timerId = begin_carousel()
})

carousel_left.addEventListener("click", () => {
    shift_carousel_backwards()
    clearInterval(timerId)
    timerId = begin_carousel()
})

// $.each( $('*'), function() { 
//     if( $(this).width() > $('body').width()) {
//         console.log("Wide Element: ", $(this), "Width: ", $(this).width()); 
//     } 
// });

