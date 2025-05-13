let input = document.querySelector("input")
let button = document.querySelector("button")
let ul = document.querySelector("ul")

button.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please enter something")
  } else {
    let li = document.createElement("li")
    li.innerHTML = `${input.value} <span class="delete">✖</span>`
    ul.append(li)
    input.value = ""
    addDeleteFunctionality()
  }
})

function addDeleteFunctionality() {
  const deleteBtns = document.querySelectorAll(".delete")
  deleteBtns.forEach(btn => {
    btn.onclick = function () {
      this.parentElement.remove()
    }
  })
}

// Apply delete to initial items (optional if no default <li> exists)
addDeleteFunctionality()
