

let body = dq("body")
let presentationManagement = dq("#presentationManagement")
let entrepreneurship = dq("#entrepreneurship")
let webDesignTeam = dq("#webDesignTeam")

function modifyBody(inside, event) {
    let insides = dqa("body>*")
    for (let i = 0; i < insides.length; i++) {
        if(!insides[i].classList.contains("event-body")) {
            insides[i].style.display = inside;
        } else {
            //class is event-body
            insides[i].style.display = event;
        }
    }
}

presentationManagement.addEventListener("click", () => {
    modifyBody("none", "block")
})

entrepreneurship.addEventListener("click", () => {
    modifyBody("none", "block")
})

webDesignTeam.addEventListener("click", () => {
    modifyBody("none", "block")
})