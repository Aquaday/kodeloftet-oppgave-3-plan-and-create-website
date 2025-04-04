import { darkMode, dropDownMenu } from "./main.js"

let darkModeButton = document.querySelector("#darkModeButton")
darkModeButton.addEventListener("click", darkMode)

let dropDownContent = document.querySelector(".dropDownContent")
let hidden = true
let dropDownButton = document.querySelector(".dropDownButton")
dropDownButton.addEventListener("click", dropDownMenu)

// ______________________________________________________Svar1______________
let svar1Knapp = document.querySelector("#svar1ActionEl")
let svar1 = document.querySelector("#svar1El")
let svar1Text = document.createElement("p")
let open1 = false

svar1Knapp.addEventListener("click", function() {
    if (open1 === false) {
    
        svar1Text.textContent = "Dette er svaret på spørsmålet1"

        svar1.appendChild(svar1Text);

        open1 = true}
    else {
        svar1.removeChild(svar1Text)
        open1 = false
}
})

// ______________________________________________________Svar2______________
let svar2Knapp = document.querySelector("#svar2ActionEl")
let svar2 = document.querySelector("#svar2El")
let svar2Text = document.createElement("p")
let open2 = false

svar2Knapp.addEventListener("click", function() {
    if (open2 === false) {
    
        svar2Text.textContent = "Dette er svaret på spørsmålet2"

        svar2.appendChild(svar2Text);

        open2 = true}
    else {
        svar2.removeChild(svar2Text)
        open2 = false
}
})

// ______________________________________________________Svar3______________
let svar3Knapp = document.querySelector("#svar3ActionEl")
let svar3 = document.querySelector("#svar3El")
let svar3Text = document.createElement("p")
let open3 = false

svar3Knapp.addEventListener("click", function() {
    if (open3 === false) {
    
        svar3Text.textContent = "Dette er svaret på spørsmålet3"

        svar3.appendChild(svar3Text);

        open3 = true}
    else {
        svar3.removeChild(svar3Text)
        open3 = false
}
})

// ____________________________________Submit button form______

let submitKnapp = document.querySelector("#formSubmit")
let accept = document.querySelector("#formAccept")
let formAcceptText = document.createElement("p")

submitKnapp.addEventListener("click", function(event) {

    event.preventDefault();

    formAcceptText.textContent = "Takk for hendvendelse! Vi tar kontakt med deg snart."

    accept.appendChild(formAcceptText);
})



