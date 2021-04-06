'use strict';

const items = document.querySelectorAll('.deadline__item h4');

const heading = document.querySelector('.heading');
const deadline = new Date(2021, 6, 6, 24, 0);

const showTime = () => {
  const time = deadline - Date.now();

  // 1 day = 24 hours
  // 1 hour = 60 min
  // 1 min = 60 s
  // 1 s = 1000 ms

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (time > 0) {
    days = Math.floor(time / oneDay);
    hours = Math.floor((time % oneDay) / oneHour);
    minutes = Math.floor((time % oneHour) / oneMinute);
    seconds = Math.floor((time % oneMinute) / 1000);
  } else {
    clearInterval(countdown);
    heading.textContent = `We have just launched`;
  }

  const values = [days, hours, minutes, seconds];
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = String(values[i]).padStart(2, '0');
  }
}

const countdown = setInterval(showTime, 1000);

showTime();