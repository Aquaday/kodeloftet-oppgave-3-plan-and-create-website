
let darkModeButton = document.querySelector("#darkModeButton")

import { darkMode } from "./main.js"

darkModeButton.addEventListener("click", darkMode)

let dropDownContent = document.querySelector(".dropDownContent")
let hidden = true
let dropDownButton = document.querySelector(".dropDownButton")

import { dropDownMenu } from "./main.js"

dropDownButton.addEventListener("click", dropDownMenu)