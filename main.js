let lastRenderTime = 0;
const snakeSpeed = 2;  // moves two times per seconds 


let main = (currentTime) => {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    
    requestAnimationFrame(main);
    if (secondsSinceLastRender < 1 / snakeSpeed) return;
     
    lastRenderTime = currentTime;
    console.log(currentTime)
}

// requestAnimationFrame(main);


