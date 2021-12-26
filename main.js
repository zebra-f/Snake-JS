import { update as updateSnake, draw as drawSnake, SNAKE_SPEED,
     snakeHeadPosition, snakeIntersection } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { getGridSize, outsideGrid } from "./grid.js"


let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board")

gameBoard.style.gridTemplateRows = `repeat(${getGridSize()}, 1fr)`
gameBoard.style.gridTemplateColumns = `repeat(${getGridSize()}, 1fr)`


const main = (currentTime) => {
    if (gameOver) {
        return;
    }
    
    requestAnimationFrame(main);
    
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
    lastRenderTime = currentTime;
    
    // updates snake/food position
    updateSnake();
    updateFood();

    gameOverCheck();
    // clears board before drawing (removes previously created divs)
    gameBoard.innerHTML = '';
    // draws snake/food
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
// --->
requestAnimationFrame(main);


function gameOverCheck() {
    gameOver = outsideGrid(snakeHeadPosition()) || snakeIntersection();
}

