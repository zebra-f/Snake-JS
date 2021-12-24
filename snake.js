export const SNAKE_SPEED = 0.5;  // moves SNAKESPEED times per seconds 

const snakeBodyPosition = [
                        { x: 11, y: 11 },
                        { x: 12, y: 11 },
                        { x: 13, y: 11 }
    ];

export let update = () => {
    console.log('update');
}

export let draw = gameBoard => {
    snakeBodyPosition.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    });  // draws Snake on a Game Board

    console.log('draw');
}


