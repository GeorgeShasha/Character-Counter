const totalCounterEl = document.querySelector(".total-counter");
const remainingCounterEl = document.querySelector(".remaining-counter");
const textareaEl = document.getElementById("textarea");

/*
textareaEl.addEventListener("keyup", () => {
  totalCounterEl.innerHTML = textareaEl.value.length;
  remainingCounterEl.innerHTML =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
});
*/

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

const updateCounter = () => {
  totalCounterEl.innerHTML = textareaEl.value.length;
  remainingCounterEl.innerHTML =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
};

updateCounter();
