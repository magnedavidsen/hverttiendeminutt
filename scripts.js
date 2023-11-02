const countDownClock = (number = 100, format = "seconds") => {
  const d = document;

  const minutesElement = d.querySelector(".minutes");
  const secondsElement = d.querySelector(".seconds");
  const milliSecondsElement = d.querySelector(".milliseconds");
  let countdown;
  convertFormat(format);

  function convertFormat(format) {
    switch (format) {
      case "seconds":
        return timer(number);
      case "minutes":
        return timer(number * 60);
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 10);
  }

  function displayTimeLeft(seconds) {
    minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
    secondsElement.textContent =
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    milliSecondsElement.textContent = (new Date().getMilliseconds() / 100)
      .toFixed(0)
      .padStart(2, "0");
  }
};

/*
    start countdown
    enter number and format
    days, hours, minutes or seconds
  */
const now = new Date();
const minutes = now.getMinutes();
const ceiling = Math.ceil(minutes / 10) * 10;
const countdown = ceiling - minutes;

countDownClock(countdown, "minutes");
