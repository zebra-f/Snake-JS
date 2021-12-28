import { expandSnake, onSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

export let score = -1;
let foodPosition = getRandomFoodPosition();
const EXPANSION_RATE = 1;  // how many segments will be added to the snake body after eating a food


// function used by main.js
export const update = () => {
    if (onSnake(foodPosition)) {
        expandSnake(EXPANSION_RATE);
        foodPosition = getRandomFoodPosition();
    }
}


// function used by main.js
export const draw = gameBoard => {
    const foodElement = document.createElement('div');
    // adds style based on a position (x, y)
    foodElement.style.gridRowStart = foodPosition.y;  
    foodElement.style.gridColumnStart = foodPosition.x;  
    foodElement.classList.add('food');  
    
    gameBoard.appendChild(foodElement);  
}

// creates a new position for food on an empty position
function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
        // used by ui.js
        score ++;
    }
    return newFoodPosition;
}
