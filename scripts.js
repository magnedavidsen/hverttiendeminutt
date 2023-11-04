const countDownClock = (number) => {
  const d = document;

  const minutesElement = d.querySelector(".minutes");
  const secondsElement = d.querySelector(".seconds");

  let countdown;
  timer(number);

  function updateTimeLeft(then) {
    let secondsLeft = Math.round((then - Date.now()) / 1000);
    displayTimeLeft(secondsLeft);

    if (secondsLeft <= 0) {
      //reset counter to ten minutes
      clearInterval(countdown);
      timer(600);
    }
  }

  function timer(seconds) {
    let then = Date.now() + seconds * 1000;

    updateTimeLeft(then);
    countdown = setInterval(() => {
      updateTimeLeft(then);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    const minutes = Math.floor(((seconds % 86400) % 3600) / 60);
    const paddedMinutes = minutes.toString().padStart(2, "0");

    const sec = seconds % 60;
    const paddedSeconds = sec.toString().padStart(2, "0");

    // Update the individual digit containers for minutes
    const minuteDigits = d.querySelectorAll(".minutes .digit");
    minuteDigits[0].textContent = paddedMinutes[0];
    minuteDigits[1].textContent = paddedMinutes[1];

    // Update the individual digit containers for seconds
    const secondDigits = d.querySelectorAll(".seconds .digit");
    secondDigits[0].textContent = paddedSeconds[0];
    secondDigits[1].textContent = paddedSeconds[1];

    minutesElement.className = "minutes";
    secondsElement.className = "seconds";
  }
};

const now = new Date();
const minutes = now.getMinutes();
const ceiling = Math.ceil(minutes / 10) * 10;
const diff = ceiling - minutes;
const countdownMinutes = diff === 0 ? 10 : diff;
const countdownSeconds = countdownMinutes * 60 - now.getSeconds();

countDownClock(countdownSeconds);
