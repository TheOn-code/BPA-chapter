

let body = dq("body")
let presentationManagement = dq("#presentationManagement")
let entrepreneurship = dq("#entrepreneurship")
let webDesignTeam = dq("#webDesignTeam")
let smallBusinessTeam = dq("#smallBusinessTeam")
let uxDesign = dq("#uxDesign")
let broadcastNews = dq("#broadcastNews")
let presentationManagementTeam = dq("#presentationManagementTeam")


function modifyBody(inside, event) {
    let insides = dqa("body>*")
    for (let i = 0; i < insides.length; i++) {
        if(!insides[i].classList.contains("event-detail-container")) {
            insides[i].style.display = inside;
        } else {
            //class is event-body
            insides[i].style.display = event;
        }
    }
}

function showEvent(classname) {
    let events = dqa(".event-info")
    for (let i = 0; i < events.length; i++) {
        if (events[i].classList.contains(classname)) {
            events[i].style.display = "block"
        }
    }
}

function hideAllEvents() {
    let events = dqa(".event-info")
    for (let i = 0; i < events.length; i++) {
        events[i].style.display = "none"
    }
}

presentationManagement.addEventListener("click", () => {
    modifyBody("none", "block")
    showEvent("presentation-management")
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})

entrepreneurship.addEventListener("click", () => {
    modifyBody("none", "block")
    showEvent("entrepreneurship")
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})

webDesignTeam.addEventListener("click", () => {
    modifyBody("none", "block")
    showEvent("website")
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})

smallBusinessTeam.addEventListener("click", () => {
    modifyBody("none", "block")
    showEvent("small-business")
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})

uxDesign.addEventListener("click", () => {
    modifyBody("none", "block")
    showEvent("ux-design")
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})

broadcastNews.addEventListener("click", () => {
    modifyBody("none", "block")
    showEvent("broadcast-news")
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})

presentationManagementTeam.addEventListener("click", () => {
    modifyBody("none", "block")
    showEvent("presentation-management-team")
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})

closeButtons = dqa(".event-example > i.material-icons")

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", () => {
        document.location.reload(true)
    })
}

