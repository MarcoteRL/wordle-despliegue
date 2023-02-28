"use strict";

import { randomWord as _randomWord } from "../src/words.js";

const word = _randomWord();

function draw(container, col, row, letter = "") {
    const div = document.createElement("div");
    div.className = "gameTable warning";
    div.id = `box${row}${col}`;
    div.textContent = letter;
    container.appendChild(div);
    return container;
}

function drawLetter(container) {
    const game = document.createElement("div");
    game.className = "game";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 6; j++) {
            draw(game, i, j);
        }
    }
    container.appendChild(game);
}

function main() {
    const game = document.getElementById("game")
    drawLetter(game);
}

main();

console.log(word);
