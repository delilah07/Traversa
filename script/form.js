import { addDisabledAttribute } from './script.js';
const signupForm = document.querySelector('.signup__form');
const signupBtn = document.querySelector('.signup__btn');
const signupInput = document.querySelector('.signup__input');

const signupBtnOptions = {
  pending: `
    <img src='./assets/icons/svg-spinners--12-dots-scale-rotate.svg' alt='spinning icon'>
    <span>Sending ...</span>
    `,
  success: `Thank You`,
};

export async function handleFormSubmit(e) {
  e.preventDefault();
  addDisabledAttribute([signupForm, signupBtn]);
  signupBtn.innerHTML = signupBtnOptions.pending;
  signupBtn.setAttribute('disabled', '');
  signupBtn.style.cursor = 'inherit';
  const userEmail = signupInput.value;
  signupInput.style.display = 'none';
  await postEmailToDatabase(userEmail);
  signupBtn.innerHTML = signupBtnOptions.success;
}

function postEmailToDatabase(email) {
  console.info(`Your email is ${email}`);
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
