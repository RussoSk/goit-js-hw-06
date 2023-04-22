const counter = document.querySelector('#counter');
const valueSpan = document.querySelector('#value');

let counterValue = 0;

counter.firstElementChild.addEventListener('click', () => {
    counterValue -=1;
    valueSpan.textContent = counterValue;
});

counter.lastElementChild.addEventListener('click', () => {
    counterValue +=1;
    valueSpan.textContent = counterValue;
})