let input = document.querySelector("input")
let totalChar = document.querySelector("#total-char")
let remChar = document.querySelector("#rem-char")
input.addEventListener("keyup", () => {
    totalChar.innerHTML = (input.value).length
    remChar.innerHTML = input.getAttribute("maxlength") - (input.value).length
})

