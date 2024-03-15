const form = document.querySelector("body main .form");
const button = document.querySelector("body main section button");

button.addEventListener("click", (e) => {
  const input = document.querySelector("body main .form input");
  let value = input.value;
  const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (regexp.test(value)) form.classList.remove("error");
  else {
    e.preventDefault();
    form.classList.add("error");
  }
});
