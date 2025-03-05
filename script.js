import { darkMode, dropDownMenu } from "./main.js"

let darkModeButton = document.querySelector("#darkModeButton")
darkModeButton.addEventListener("click", darkMode)

let dropDownContent = document.querySelector(".dropDownContent")
let hidden = true
let dropDownButton = document.querySelector(".dropDownButton")
dropDownButton.addEventListener("click", dropDownMenu)