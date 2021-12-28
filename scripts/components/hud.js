import { score } from "./food.js";

let scoreUI = document.getElementById("score");


export const updateScore = () => {
    scoreUI.innerText = `Score: ${score}`;
}