const openModalBtn = document.querySelector("[data-action='mobile-open-modal']");
const closeModalBtn = document.querySelector('[data-action=mobile-close-modal]');
const backdrop = document.querySelector('.mobile-backdrop');
const body = document.querySelector('body');

// console.log('openModalBtn:>>', openModalBtn);
// console.log('closeModalBtn:>>', closeModalBtn);

openModalBtn.addEventListener('click', () => {
  body.classList.toggle('mobile-show-modal');
});
closeModalBtn.addEventListener('click', () => {
  body.classList.remove('mobile-show-modal');
});
backdrop.addEventListener('click', () => {
  if (event.target === backdrop) {
    body.classList.remove('mobile-show-modal');
  }
});
// mobile-