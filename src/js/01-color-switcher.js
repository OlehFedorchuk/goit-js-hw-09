function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');

const colorSwitcher = {
  intervalID: null,
  start() {
    this.intervalID = setInterval(() => {
      bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalID);
  },
};

btnStartEl.addEventListener('click', () => {
  colorSwitcher.start();
  btnStartEl.disabled = true;
  btnStopEl.disabled = false;
});

btnStopEl.addEventListener('click', () => {
  colorSwitcher.stop();
  btnStartEl.disabled = false;
  btnStopEl.disabled = true;
});
