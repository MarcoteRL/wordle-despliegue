"use strict";
import { randomWord as _randomWord } from "../src/words.js";
let randomWord = _randomWord;

document.querySelectorAll(".letter").forEach((element) => {
    element.addEventListener("click", () => {
        element.innerHTML = "A"
    })
})

$("#word").text(randomWord());