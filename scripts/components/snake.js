import { getInputDirection } from "./input.js";
import { getGridSize } from "./grid.js";


// variable used by main.js
export const SNAKE_SPEED = 10;  // moves SNAKE_SPEED times per seconds 
let newSegments = 0;
// starting position (middle of the board)
const startingPosition = Math.floor(getGridSize() / 2) + 1
const snakeBodyPosition = [
                        { x: startingPosition, y: startingPosition }
                        // { x: 11, y: 11 },  update()   { x: 10, y: 11 }, 
                        // { x: 12, y: 11 },  --->       { x: 11, y: 11 }, 
                        // { x: 13, y: 11 },             { x: 12, y: 11 }, 
                        // { x: 14, y: 11 },             { x: 13, y: 11 }, 
                        // { x: 14, y: 11 },             { x: 14, y: 11 }, 
                        // { x: 14, y: 11 },             { x: 14, y: 11 }, 
                        // { x: 14, y: 11 }              { x: 14, y: 11 }  // EXPENSION_RATE = 3
    ];

// function used by main.js
export const snakeHeadPosition = () => {
    return snakeBodyPosition[0];
}


// function used by main.js
export const snakeIntersection = () => {
    return snakeBodyPosition.slice(1).some(segment => {
        return equalPosition(segment, snakeHeadPosition());
    });
}


// function used by main.js
export const update = () => {
    addSegments();
    // loop runs one time less than snakeBodyPosition length
    // in case of snake body having 1 segment (only a head) it doesn't run at all
    for (let i = snakeBodyPosition.length - 2; i >= 0; i--) {
        snakeBodyPosition[i + 1] = { ...snakeBodyPosition[i] };
    }
    // y increase moving down, y decrease moving up
    // x increase moving right, x decrease moving left
    snakeBodyPosition[0].x += getInputDirection().x;
    snakeBodyPosition[0].y += getInputDirection().y;
}


// function used by main.js
export const draw = gameBoard => {
    // draws Snake on a Game Board
    snakeBodyPosition.forEach(segment => {
        // creates a new div each loop for every position in SnakeBodyPosition- <div></div>
        const snakeElement = document.createElement('div');
        // adds style based on a position (x, y)
        snakeElement.style.gridRowStart = segment.y;  // <div style="grid-row-start: 11;"></div>
        snakeElement.style.gridColumnStart = segment.x;  // <div style="grid-row-start: 11; grid-column-start: 11;"></div>
        // adds class name for css styling (.snake)
        snakeElement.classList.add('snake');  // <div style="grid-row-start: 11; grid-column-start: 11;" class="snake"></div>
        // appends created div to a game-board div // <div id="game-board"></div>
        gameBoard.appendChild(snakeElement);  
    });  
}


// function used by food.js
export const expandSnake = EXPANSION_RATE => {
    newSegments += EXPANSION_RATE;
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        // duplicates last segment of snake body 
        snakeBodyPosition.push({ ...snakeBodyPosition[snakeBodyPosition.length - 1]})
    }
    newSegments = 0
}


// function used by food.js
export let onSnake = position => {
    // returns true or false
    return snakeBodyPosition.some(segment => {
        return equalPosition(segment, position);
    });
}
// used inside onSnake 
function equalPosition(segment, position) {
    return segment.x === position.x && segment.y === position.y;
}

