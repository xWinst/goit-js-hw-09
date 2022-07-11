import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');
let stair;
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let {
        elements: { delay, step, amount },
    } = event.currentTarget;

    delay = Number(delay.value);
    stair = Number(step.value);
    amount = Number(amount.value);
    promiseFactory(delay + (amount - 1) * stair, amount);
}

function promiseFactory(delay, amount) {
    if (!amount) return;
    promiseFactory(delay - stair, amount - 1);
    createPromise(amount, delay)
        .then(({ position, delay }) =>
            Notify.success(`Fulfilled promise ${position} in ${delay}ms`, {
                timeout: 6000,
            })
        )
        .catch(({ position, delay }) =>
            Notify.failure(`Rejected promise ${position} in ${delay}ms`, {
                timeout: 6000,
            })
        );
}

function createPromise(position, delay) {
    console.log(position);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldResolve = Math.random() > 0.3;
            if (shouldResolve) {
                resolve({ position, delay });
            } else {
                reject({ position, delay });
            }
        }, delay);
    });
}
