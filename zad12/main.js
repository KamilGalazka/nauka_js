// http://websamuraj.pl/examples/js/projekt11/

const startButton = document.querySelector(".main");
const resetButton = document.querySelector(".reset");
const divTime = document.querySelector("div.time div");

let time = 0;
let timerInterval;

function timer() {
    divTime.textContent = (++time / 100).toFixed(2);
}

function startOrPause() {

    if (startButton.textContent === "Start") {
        startButton.textContent = "Pause";
        timerInterval = setInterval(timer, 10);
        
        
    }else {
        startButton.textContent = "Start";
        clearInterval(timerInterval);
    }
}

function resetTime() {
    clearInterval(timerInterval);
    time = 0;
    divTime.textContent = "---";
    startButton.textContent = "Start";
}

startButton.addEventListener("click" ,startOrPause);
resetButton.addEventListener("click", resetTime);