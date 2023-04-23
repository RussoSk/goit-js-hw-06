const inputRef = document.querySelector("#controls input");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");
const inputElement = document.querySelector('input[type="number"]');
const maxNum = Number(inputElement.max);
const minNum = Number(inputElement.min);
const iterator = Number(inputElement.step);

function createBoxes(amount) {
  if (amount < minNum || amount > maxNum) {
    return;
  }
  const boxSize = 30;
  const boxes = [];

  for (let i = 0; i < amount; i += iterator) {
    const box = document.createElement("div");
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  boxesRef.append(...boxes);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputElement.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

createBtnRef.addEventListener("click", () => {
  createBoxes(inputRef.value);
});

destroyBtnRef.addEventListener("click", () => {
  destroyBoxes();
});
