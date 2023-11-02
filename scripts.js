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
    minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60)
      .toString()
      .padStart(2, "0");
    secondsElement.textContent = (
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60
    )
      .toString()
      .padStart(2, "0");
  }
};

const now = new Date();
const minutes = now.getMinutes();
const ceiling = Math.ceil(minutes / 10) * 10;
const countdownMinutes = ceiling - minutes;
const countdownSeconds = countdownMinutes * 60 - now.getSeconds();

countDownClock(countdownSeconds);
