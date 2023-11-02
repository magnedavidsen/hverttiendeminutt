const countDownClock = (number) => {
  const d = document;

  const minutesElement = d.querySelector(".minutes");
  const secondsElement = d.querySelector(".seconds");

  let countdown;
  timer(number);

  function timer(seconds) {
    let then = Date.now() + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        //reset counter
        then = Date.now() + seconds * 1000;
      }

      displayTimeLeft(secondsLeft);
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
  }
};

const now = new Date();
const minutes = now.getMinutes();
const ceiling = Math.ceil(minutes / 10) * 10;
const countdownMinutes = ceiling - minutes;
const countdownSeconds = countdownMinutes * 60 - now.getSeconds();

countDownClock(countdownSeconds);
