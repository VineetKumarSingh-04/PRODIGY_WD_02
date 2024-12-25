const display = document.querySelector('.stopwatch-display');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

function formatTime(time) {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    return (
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds + ':' +
        (milliseconds < 10 ? '0' : '') + milliseconds
    );
}

function startStopwatch() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            display.textContent = formatTime(elapsedTime);
        }, 10);
    }
}

function stopStopwatch() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    display.textContent = "00:00:00:00";
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
