const secondsElement = document.getElementById('seconds');
const tensElement = document.getElementById('tens');

const startBtn = document.getElementById('start');
const endBtn = document.getElementById('end');

const resetBtn = document.getElementById('reset');

let seconds = 0;
let tens = 0;
let interval;

function startStopWatch(event) {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
}
startBtn.addEventListener('click', startStopWatch);

function endStopWatch() {
  clearInterval(interval);
}
endBtn.addEventListener('click', endStopWatch);

function resetStopWatch() {
  clearInterval(interval);
  seconds = 0;
  tens = 0;
  secondsElement.innerHTML = '00';
  tensElement.innerHTML = '00';
}
resetBtn.addEventListener('click', resetStopWatch);

function startTimer() {
  tens += 1;
  if (tens <= 9) {
    tensElement.innerHTML = '0' + tens;
  }
  if (tens > 9) {
    tensElement.innerHTML = tens;
  }
  if (tens > 100) {
    tens = 0;
    seconds++;
    tensElement.innerHTML = '00';
    if (seconds <= 9) {
      secondsElement.innerHTML = '0' + seconds;
    }
  }
  if (seconds > 9) {
    secondsElement.innerHTML = seconds;
  }
}
