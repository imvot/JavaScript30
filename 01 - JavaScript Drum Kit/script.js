window.addEventListener("keydown", event => {
    console.log(event.code)
    const key = document.querySelector(`div[data-key=${event.code}`)
    keyPress(key)
    const sound = document.querySelector(`audio[data-key=${event.code}`)
    playSound(sound)
})

window.addEventListener("keyup", event => {
    console.log(event.code)
    const key = document.querySelector(`div[data-key=${event.code}`)
    keyRelease(key)
    const sound = document.querySelector(`audio[data-key=${event.code}`)
    pauseSound(sound)
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
