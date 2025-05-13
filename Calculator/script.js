let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let result = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "AC") {
      result = "";
    } else if (value === "DE") {
      result = result.slice(0, -1);
    } else if (value === "=") {
      try {
        result = eval(result).toString();
      } catch {
        result = "Error";
      }
    } else {
      result += value;
    }

    input.value = result;
  });
});
