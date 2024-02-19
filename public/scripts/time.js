let startTime;
let elapsedTime = 0;
let timerInterval;

  function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
  }

  function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    displayTime(elapsedTime);
  }

  function displayTime(time) {
    const minutes = Math.floor(time / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    const formattedTime = `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds)}`;
    document.querySelector('.stopwatch').textContent = formattedTime;
  }

  function padNumber(number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  }

  function stopStopwatch() {
    clearInterval(timerInterval);
  }

  function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    displayTime(elapsedTime);
  }