import {update, draw, SNAKE_SPEED } from './snake.js'

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board")


let main = (currentTime) => {
    requestAnimationFrame(main);
    
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
    lastRenderTime = currentTime;

    update();
    draw(gameBoard);
}

requestAnimationFrame(main);


