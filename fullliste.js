// _____________________-----Info Array-----__________________
let turNavn = ["Ulriken", "Fløyen", "Skranevatne", "Lyderhorn"]
let turLengde = ["3 timer", "4 timer", "30 minutter", "5 timer"]
let visTur = 0

let turNavnEl = document.querySelector("#turNavnElement")
let turNavnText = document.createElement("h1")
let turLengdeEl = document.querySelector("#turLengdeElement")
let turLengdeText = document.createElement("p")

turNavnEl.appendChild(turNavnText) 
turLengdeEl.appendChild(turLengdeText)

let cycleButton = document.querySelector("#cycleTur")
cycleButton.addEventListener("click", cycleTur)

function cycleTur() {
    if (visTur === turNavn.length) {
        visTur = 0
        cycleTur()
    } else {
    turNavnEl.removeChild(turNavnText)
    turLengdeEl.removeChild(turLengdeText)

    turNavnText.textContent = turNavn[visTur]
    turLengdeText.textContent = turLengde[visTur]

    turNavnEl.appendChild(turNavnText)
    turLengdeEl.appendChild(turLengdeText)
    visTur += 1
    }
}


cycleTur()

import { darkMode } from "./main.js"

let darkModeButton = document.querySelector("#darkModeButton")

darkModeButton.addEventListener("click", darkMode)
