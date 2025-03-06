// _____________________-----Info Array-----__________________
let turNavn = ["Ulriken", "Fløyen", "Skranevatne", "Lyderhorn"]
let turLengde = ["3 timer", "4 timer", "30 minutter", "5 timer"]
let turBilde = ["images/floeyen-floeybanen-6.jpg", "images/IJC00170-2.jpg", "images/irina-iriser-2Y4dE8sdhlc-unsplash.jpg"]
let visTur = 0

let turNavnEl = document.querySelector(".turNavnElement")
let turLengdeEl = document.querySelector(".turLengdeElement")
let turBildeEl = document.querySelector(".turBildeElement")

let cycleButton = document.querySelector(".cycleTur")
cycleButton.addEventListener("click", cycleTur)

function cycleTur() {
    if (visTur === turNavn.length) {
        visTur = 0
        cycleTur()
    } else {

    let turBildeNummer = turBilde[visTur]
    let turNavnNummer = turNavn[visTur]
    let turLengdeNummer = turLengde[visTur]

    turBildeEl.innerHTML = '<img src="'+turBildeNummer+'">'
    turNavnEl.innerHTML = '<h1>'+turNavnNummer+'</h1>'
    turLengdeEl.innerHTML = '<p>'+turLengdeNummer+'</p>'
    visTur += 1
    }
}


cycleTur()

import { darkMode, dropDownMenu } from "./main.js"

let darkModeButton = document.querySelector("#darkModeButton")
darkModeButton.addEventListener("click", darkMode)

let dropDownContent = document.querySelector(".dropDownContent")
let hidden = true
let dropDownButton = document.querySelector(".dropDownButton")
dropDownButton.addEventListener("click", dropDownMenu)