import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

let intervalId = null;
let targetDate = null;
refs.startBtn.setAttribute('disabled', true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        refs.startBtn.removeAttribute('disabled');
        targetDate = selectedDates[0].getTime();
        if (targetDate <= Date.now()) {
            return Notify.failure("Please choose a date in the future");
        }

        refs.startBtn.addEventListener('click', startCountDown(targetDate));
  }
}

flatpickr("input[type=\"text\"]", options);

function startCountDown(targetTime) {
    intervalId = setInterval(() => { 
        
        const timeIsLeft = targetTime - Date.now();
        // console.log(timeIsLeft);
        if (timeIsLeft < 1000) {
            clearInterval(intervalId);
        }
        const convertedTime = convertMs(timeIsLeft);
        updateClockface(convertedTime);
    }, 1000);

}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function updateClockface({ days, hours, minutes, seconds }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
}
