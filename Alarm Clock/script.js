let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let meri = document.querySelector(".meri");

let day = document.querySelector(".day");
let month = document.querySelector(".month");
let date = document.querySelector(".date");
let year = document.querySelector(".year");

let hoursOptions = document.querySelector("#hours-options");
let mintsOptions = document.querySelector("#mints-options");

let h;
let m;
let s;
let meridiun = "AM";

let setAlarm2 = document.querySelector("#set-alarm");
let allAlarmList = document.querySelector(".all-alarm-list");

setInterval(() => {
  let d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();

  let dy = d.getDay();
  let mon = d.getMonth();
  let dt = d.getDate();
  let yr = d.getFullYear();
  if (h > 12) {
    h = h - 12;
    meridiun = "PM";
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  hr.innerHTML = h + ":";
  min.innerHTML = m + ":";
  sec.innerHTML = s;
  meri.innerHTML = meridiun;

  day.innerHTML = d.toLocaleString("en", { weekday: "long" }) + ", ";
  month.innerHTML = d.toLocaleDateString("en", { month: "long" });
  date.innerHTML = dt + ", ";
  year.innerHTML = yr;
}, 1000);

function addOptions() {
  /* Creating Hours Options*/

  for (let i = 1; i <= 12; i++) {
    i = i < 10 ? "0" + i : i;
    let opt = document.createElement("option");
    opt.value = i;
    opt.innerHTML = i;
    hoursOptions.append(opt);
  }

  /* Creating Minutes Options*/

  for (let i = 0; i <= 59; i++) {
    i = i < 10 ? "0" + i : i;
    let opt = document.createElement("option");
    opt.value = i;
    opt.innerHTML = i;
    mintsOptions.append(opt);
  }
}
addOptions();

function setAlarmFunction() {
  let selectMenu = document.querySelectorAll("select");
  let li = document.createElement("li");
  li.innerHTML =
    '<img src="images/ringbell.png" width="30" alt="">' +
    selectMenu[0].value +
    " : " +
    selectMenu[1].value +
    " " +
    selectMenu[2].value +
    ' <img src="images/trash.png" width="30" class="trash" alt="">';
  allAlarmList.append(li);

  let trash = document.querySelectorAll(".trash");
  for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener("click", () => {
      trash[i].parentElement.remove();
    });
  }

  let hoursSet = selectMenu[0].value;
  let mintsSet = selectMenu[1].value;
  let meriSet = selectMenu[2].value;

  let alarmTime = ` ${hoursSet} : ${mintsSet} ${meriSet}`;
  console.log(alarmTime);

  let d = new Date();
  let hours = d.getHours();
  let mints = d.getMinutes();
  let meridium = hours > 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mints < 10) {
    mints = "0" + mints;
  }
  let currentTime = ` ${hours} : ${mints} ${meridium}`;
  console.log(currentTime);

  if (alarmTime == currentTime) {
    setTimeout(() => {
      alert("Your Alarm is ringing !!!!!!!! please Stop alarm ");
      li.remove();
    }, 500);
  }

  setInterval(() => {
  for(a of alarmTime){
    if(currentTime == a){
      alert("OK")
    }
  }
  }, 1000);
}

setAlarm2.addEventListener("click", setAlarmFunction);
