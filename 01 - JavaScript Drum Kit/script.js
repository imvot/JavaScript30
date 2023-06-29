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

const sounds = {}
document.querySelectorAll("audio").forEach((sound, i) => sounds[keyCode[i]] = sound )

window.addEventListener("keydown", event => {
    console.log(event.code)
    keyPress(keys[event.code])
    playSound(sounds[event.code])
})

window.addEventListener("keyup", event => {
    console.log(event.code)
    pauseSound(sounds[event.code])
    keyRelease(keys[event.code])
})

function keyPress(keyObject) {
    keyObject.classList.add("playing")
}

function keyRelease(keyObject) {
    keyObject.classList.remove("playing")
}

function playSound(soundObject) {
    soundObject.play()
}

function pauseSound(soundObject) {
    soundObject.currentTime = 0
    soundObject.pause()
}
