const textareaEl = document.getElementById("textarea");
const totalCounte = document.getElementById("total-counter");
const remaining = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
  uptadeCounter();
});
uptadeCounter();
function uptadeCounter() {
  totalCounte.innerText = textareaEl.value.length;
  remaining.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
uptadeCounter();
