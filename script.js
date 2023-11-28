let timer;
let originalMinutes = 0;
let originalSeconds = 0;
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");
let timerDisplay = document.getElementById("timer");

function startTimer() {
  clearInterval(timer);

  let minutes = parseInt(minutesInput.value) || 0;
  let seconds = parseInt(secondsInput.value) || 0;

  if (minutes < 0 || seconds < 0 || seconds > 59) {
    alert("Invalid input! Please enter valid values.");
    return;
  }

  originalMinutes = minutes;
  originalSeconds = seconds;

  let totalSeconds = minutes * 60 + seconds;

  timer = setInterval(function () {
    if (totalSeconds <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = "00:00";
      alert("Timer done!");
    } else {
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;
      timerDisplay.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
      totalSeconds--;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  timerDisplay.textContent = "00:00";
  minutesInput.value = originalMinutes;
  secondsInput.value = originalSeconds;
}

function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}
