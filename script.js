let input = document.querySelector(".input");
let button = document.querySelector(".btn");
let erorMesage = document.querySelector(".validation-span");
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// const inputTest = regex.test(input.textContent);
button.addEventListener("click", () => {
  const inputTest = regex.test(input.value);
  if (!inputTest) {
    erorMesage.style.display = "block";
  } else {
    erorMesage.style.display = "none";
  }
});
