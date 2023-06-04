import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate.getTime() < Date.now()) {
      window.alert('Please choose a date in the future');
    } else {
      document.querySelector('[data-start]').disabled = false;
      document
        .querySelector('[data-start]')
        .addEventListener('click', function () {
          const countdownDate = selectedDate.getTime();
          startCountdown(countdownDate);
        });
    }
  },
};

flatpickr('#datetime-picker', options);

function startCountdown(countdownDate) {
  const timer = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const currentTime = Date.now();
    const timeRemaining = countdownDate - currentTime;
    if (timeRemaining <= 0) {
      clearInterval(timer);
      return;
    }
    convertMs(timeRemaining);
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  // spanDaysEl.textContent = days;
  // spanHoursEl.textContent = hours;
  // spanMinutsEl.textContent = minutes;
  // spanSecondsEl.textContent = seconds;
}
// spanDaysEl = document.querySelector('[data-days]');
// spanHoursEl = document.querySelector('[data-hours]');
// spanMinutsEl = document.querySelector('[data-minutes]');
// spanSecondsEl = document.querySelector('[data-seconds]');
