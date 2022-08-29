import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
}

refs.form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  getFormData();
});

function getFormData() {
  const formData = {
    delay: Number(refs.delay.value),
    step: Number(refs.step.value),
    amount: Number(refs.amount.value),
  }
  for1(formData);
}

function for1({delay, step, amount}) {
  for (let i = 1; i <= amount; i += 1) {
      createPromise(i, delay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        })
      delay += step;
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);

  });
};
  // for (let i = 1; i <= formData.amount; i += 1) {
  //   createPromise(i, formData.delay)
  //     .then(({ position, delay }) => {
  //       Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //     })
  //     .catch(({ position, delay }) => {
  //       Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  //     })
  //   formData.delay += formData.step;
  // }