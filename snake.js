import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 0.5;  // moves SNAKE_SPEED times per seconds 

const snakeBodyPosition = [
                        { x: 11, y: 11 }
    ];

export let update = () => {
    console.log('update');
    // loop runs one time less than snakeBodyPosition length
    // in case of snake body having 1 segment (only a head) it doesn't run at all
    for (let i = snakeBodyPosition.length - 2; i >= 0; i--) {
        snakeBodyPosition[i + 1] = { ...snakeBodyPosition[i] }
    }
    // y increase moving down, y decrease moving up
    // x increase moving right, x decrease moving left
    snakeBodyPosition[0].x += getInputDirection().x
    snakeBodyPosition[0].y += getInputDirection().y
}

export let draw = gameBoard => {
    // clears board before drawing
    gameBoard.innerHTML = ''
    
    // draws Snake on a Game Board
    snakeBodyPosition.forEach(segment => {
        // creates a new div each loop for every position in SnakeBodyPosition- <div></div>
        const snakeElement = document.createElement('div')  
        // adds style based on a position (x, y)
        snakeElement.style.gridRowStart = segment.y;  // <div style="grid-row-start: 11;"></div>
        snakeElement.style.gridColumnStart = segment.x;  // <div style="grid-row-start: 11; grid-column-start: 11;"></div>
        // adds class name for css styling (.snake)
        snakeElement.classList.add('snake');  // <div style="grid-row-start: 11; grid-column-start: 11;" class="snake"></div>
        // appends created div to a game-board div // <div id="game-board"></div>
        gameBoard.appendChild(snakeElement);  
    });  

    console.log('draw');
}

