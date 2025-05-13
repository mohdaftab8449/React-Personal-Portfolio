const timer = document.querySelector(".timer");
const stopBtn = document.querySelector("#stopBtn");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");

let msecs = 0, secs = 0, mins = 0;
let timerId = null;

function startTimer() {
  msecs++;
  if (msecs === 100) {
    msecs = 0;
    secs++;
    if (secs === 60) {
      secs = 0;
      mins++;
    }
  }

  const msecsString = msecs < 10 ? `0${msecs}` : msecs;
  const secsString = secs < 10 ? `0${secs}` : secs;
  const minsString = mins < 10 ? `0${mins}` : mins;

  timer.textContent = `${minsString} : ${secsString} : ${msecsString}`;
}

startBtn.addEventListener("click", () => {
  if (!timerId) timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  msecs = secs = mins = 0;
  timer.textContent = "00 : 00 : 00";
});
