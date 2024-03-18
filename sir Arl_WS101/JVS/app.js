import {upATT} from "./info.js"
import {dATT} from "./card.js"
import {att,bAtt, bATt, bATT} from "./img.js"

const One = {
    title : "MARS",
    para  : "This Is Mars",
    btn   : "View",
    myImg   : "me.jpg"
}

const Two = {
    titleO: "Projects",
    myPIC  : "roc.avif",
    paraW : "First Project",
    stBtn  : "Learn More",
    myPIc  : "astro.jpg",
    paraT : "Second Project",
    ndBtn  : "Learn More",
    myPic  : "station.jpg",
    paraTr : "Third Project",
    rdBtn  : "Learn More"
}

//des
const {title, para, btn, myImg} = One
const {titleO, myPIC, paraW, stBtn, myPIc, paraT, ndBtn, myPic, paraTr, rdBtn} = Two

let container = document.getElementById("sectionONe")
let containers = document.getElementById("sectionTWo")

container.append(upATT(title, para, btn, myImg))
containers.append(dATT(titleO, paraW, stBtn, paraT, ndBtn, paraTr, rdBtn, myPIC,myPIc,myPic))