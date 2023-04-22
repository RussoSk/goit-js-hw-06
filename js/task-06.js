const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  const requiredLength = Number(inputEl.getAttribute('data-length'));
  const currentLength = inputEl.value.length;

  if (currentLength === requiredLength) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});