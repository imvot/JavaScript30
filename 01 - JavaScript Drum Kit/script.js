// All buttons 
const keyCode = [
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL"
]
const keys = {}
document.querySelectorAll(".key").forEach((key, i) => keys[keyCode[i]] = key )

window.addEventListener("keydown", event => {
    console.log(event.code)
    keyPress(keys[event.code])
})

window.addEventListener("keyup", event => {
    console.log(event.code)
    keyRelease(keys[event.code])
})

function keyPress(keyObject) {
    keyObject.classList.add("playing")
}

function keyRelease(keyObject) {
    keyObject.classList.remove("playing")
}
