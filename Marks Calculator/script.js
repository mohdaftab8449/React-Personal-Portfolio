let h = document.querySelector("#h");
let e = document.querySelector("#e");
let m = document.querySelector("#m");
let c = document.querySelector("#c");
let button = document.querySelector("button");
let output = document.querySelector("#output");

button.addEventListener("click", () => {
  let hindi = parseInt(h.value) || 0;
  let english = parseInt(e.value) || 0;
  let maths = parseInt(m.value) || 0;
  let chemistry = parseInt(c.value) || 0;

  let total = hindi + english + maths + chemistry;
  let percentage = (total / 400) * 100;

  let grade = "";

  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";
  else grade = "F";

  output.innerHTML = `You got <strong>${total}</strong> marks out of 400.<br>
                      Percentage: <strong>${percentage.toFixed(2)}%</strong><br>
                      Grade: <strong>${grade}</strong>`;
});
