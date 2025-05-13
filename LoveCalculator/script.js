let name = document.querySelector("#name")
let crushName = document.querySelector("#crush-name")
let button = document.querySelector("#calculate")
let result = document.querySelector("#result")
let percent = document.querySelector("#percent")

button.addEventListener("click", () => {
  if (name.value.trim() === "" || crushName.value.trim() === "") {
    result.innerHTML = "Please enter both names ❤️";
    result.style.color = "#d32f2f";
    percent.innerHTML = "";
  } else {
    result.innerHTML = `${name.value} ❤️ ${crushName.value}`;
    let randomNum = Math.floor(Math.random() * 100 + 1);
    percent.innerHTML = `${randomNum} %`;
    result.style.color = "#880e4f";
  }
});
