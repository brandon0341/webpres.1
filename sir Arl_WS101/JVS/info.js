

const upATT = (title, para, button, image) => {
    let uDiv = document.createElement("div")
    uDiv.className = "intro"
    uDiv.innerHTML = `<h1 class="prof" >${title}</h1>
                      <p>${para}</p>
                      <button>${button}</button>`

    return uDiv
}

export {upATT}