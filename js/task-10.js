
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
      const controls = document.querySelector("#controls");
      const btnCreate = controls.querySelector('[data-create]');
      const btnDestroy = controls.querySelector('[data-destroy]');
      const boxes = document.querySelector("#boxes");

      btnCreate.addEventListener("click", createBoxes);
      btnDestroy.addEventListener("click", destroyBoxes);

      function createBoxes() {
        const inputVal = controls.querySelector("input").value;

        for (let i = 0; i < inputVal; i++) {
          const box = document.createElement("div");
          const size = 30 + i * 10;
          box.style.width = `${size}px`;
          box.style.height = `${size}px`;
          box.style.backgroundColor = getRandomHexColor();
          boxes.appendChild(box);
        }
      }

      function destroyBoxes() {
        boxes.innerHTML = "";
      }

