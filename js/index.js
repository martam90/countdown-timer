'use strict';

const dayItem = document.querySelector('.days');
const hourItem = document.querySelector('.hours');
const minuteItem = document.querySelector('.minutes');
const secondItem = document.querySelector('.seconds');

const deadline = new Date(2021, 9, 6, 24, 0);

const showTime = () => {
  const time = deadline - Date.now();
  console.log(time);

  // 1 day = 24 hours
  // 1 hour = 60 min
  // 1 min = 60 s
  // 1 s = 1000 ms

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const days = Math.floor(time / oneDay);
  const hours = Math.floor((time % oneDay) / oneHour);
  const minutes = Math.floor((time % oneHour) / oneMinute);
  const seconds = Math.floor((time % oneMinute) / 1000);

  dayItem.innerHTML = days;
  hourItem.innerHTML = hours;
  minuteItem.innerHTML = minutes;
  secondItem.innerHTML = seconds;


  // function format (item) {
  //   if (item < 10) {
  //     return item `0${item}`;
  //   }
  //   return item;
  // }

  // const values = [days, hours, minutes, seconds];
  // items.forEach(function(item, index) {
  //   item.innerHTML = format(values[index]);
  // });

}

const countdown = setInterval(showTime, 1000);

showTime();