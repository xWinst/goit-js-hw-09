import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let {
        elements: { delay, step, amount },
    } = event.currentTarget;

    delay = Number(delay.value);
    step = Number(step.value);
    amount = Number(amount.value);

    for (let i = 0; i < amount; i += 1) {
        createPromise(i + 1, delay + i * step)
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
}

function createPromise(position, delay) {
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
