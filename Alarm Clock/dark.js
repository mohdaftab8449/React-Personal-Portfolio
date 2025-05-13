let darkimg = document.querySelector("#dark");
let setAlarm = document.querySelector("#set-alarm");
let allAlarms = document.querySelector("#all-alarms");
let colSm8 = document.querySelectorAll(".col-sm-8");

let val = "light";

darkimg.addEventListener("click", () => {
  if (val === "light") {
    document.body.classList.add("dark");
    document.body.style.backgroundColor = "#0e1b27";
    for (let i = 0; i < colSm8.length; i++) {
      colSm8[i].style.backgroundColor = "#283C4E";
    }
    setAlarm.classList.add("dark");
    allAlarms.classList.add("dark");
    val = "dark";
  } else {
    document.body.classList.remove("dark");
    document.body.style.backgroundColor = "#fff";
    for (let i = 0; i < colSm8.length; i++) {
      colSm8[i].style.backgroundColor = "#fff";
    }
    setAlarm.classList.remove("dark");
    allAlarms.classList.remove("dark");
    val = "light";
  }
});

let about = document.querySelector("#about");
about.addEventListener("click", () => {
  alert(
    "Hi , Welcome   This   is   Alarm   Clock   created   By   ::=>  MOHD. AFTAB <=::   by   using  FrontEnd   Techniques ( HTML / CSS / Vanilla Js ) "
  );
});
