let inputDirection = { x: 0, y: 0};
let lastInputDirection = { x: 0, y: 0};

window.addEventListener('keydown', e => {
    switch (e.key) {
        case "w":
        case "ArrowUp":
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: -1 };
            break;
        case "s":
        case "ArrowDown":
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: 1 };
            break;
        case "d":
        case "ArrowRight":
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: 1, y: 0 };
            break;
        case "a":
        case "ArrowLeft":
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: -1, y: 0 };
            break;
    }
});

// window.addEventListener('keydown', e => {
//     console.log(e.key);
// });

export let getInputDirection = () => {
    lastInputDirection = inputDirection;
    return inputDirection;
}