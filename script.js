let counter = 0;
const min = 0;
const max = 1000;

const countEl = document.querySelector(".count-value");
const minusBtn = document.querySelector(".btn-minus");
const plusBtn = document.querySelector(".btn-plus");
const resetBtn = document.querySelector(".btn-reset");

function updateUI() {
  countEl.textContent = counter;
  minusBtn.disabled = counter <= min;
  plusBtn.disabled = counter >= max;
}

minusBtn.addEventListener("click", () => {
  if (counter > min) counter--;
  updateUI();
});

plusBtn.addEventListener("click", () => {
  if (counter < max) counter++;
  updateUI();
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  updateUI();
});

updateUI();
