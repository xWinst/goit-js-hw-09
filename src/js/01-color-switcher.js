const body = document.querySelector("body");
const start = document.querySelector("[data-start]");
const stop = document.querySelector("[data-stop]");
let timerId = 0;

start.addEventListener("click", startChangeBgColor);
stop.addEventListener("click", stopChangeBgColor);

function startChangeBgColor(){
    start.setAttribute("disabled", "true");
    timerId = setInterval(() => body.style.backgroundColor = getRandomHexColor(), 1000);
}

function stopChangeBgColor(){
    clearInterval(timerId);
    start.removeAttribute("disabled");
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
