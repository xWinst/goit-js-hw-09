import flatpickr from 'flatpickr';
import { Report } from 'notiflix/build/notiflix-report-aio';
import 'flatpickr/dist/flatpickr.min.css';

const start = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');
const timer = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0].getTime() - getNow() < 0) {
            Report.failure(
                'Wake up! This date is long gone.',
                'Please choose a date in the future',
                'I understand',
                {
                    width: '350px',
                    svgSize: '100px',
                    titleFontSize: '20px',
                    messageFontSize: '18px',
                    buttonFontSize: '20px',
                    borderRadius: '10px',
                    backgroundColor: '#ffaadd',
                }
            );
        } else {
            start.removeAttribute('disabled');
        }
    },
};

start.setAttribute('disabled', 'true');
const calendar = flatpickr(input, options);
start.addEventListener('click', startTimer);

function startTimer() {
    start.setAttribute('disabled', 'true');
    timerId = setInterval(updateTimer, 1000);
}

function updateTimer() {
    let time = calendar.selectedDates[0].getTime() - getNow();
    if (time < 0) {
        clearInterval(timerId);
        time = 0;
    }
    let { days, hours, minutes, seconds } = convertMs(time);
    timer.days.textContent = addLeadingZero(days);
    timer.hours.textContent = addLeadingZero(hours);
    timer.minutes.textContent = addLeadingZero(minutes);
    timer.seconds.textContent = addLeadingZero(seconds);
}

const getNow = () => new Date().getTime();

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}
