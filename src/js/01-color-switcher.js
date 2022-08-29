const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyStyles: document.body.style,
}

let timerId = null;
refs.stopBtn.setAttribute("disabled", true);

refs.startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        refs.bodyStyles.backgroundColor = getRandomHexColor();
    }, 1000);

    refs.startBtn.setAttribute("disabled", true);
    refs.stopBtn.removeAttribute("disabled");

});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    refs.startBtn.removeAttribute("disabled");
    refs.stopBtn.setAttribute("disabled", true);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
