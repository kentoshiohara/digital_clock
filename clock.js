'use strict';
// 時計機能
function clock() {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let dayNum = now.getDay();
  let weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = weekday[dayNum];
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  
  month = String(month).padStart(2, '0');
  date = String(date).padStart(2, '0');
  hour = String(hour).padStart(2, '0');
  min = String(min).padStart(2, '0');
  sec = String(sec).padStart(2, '0');
  
  const today = `${year}.${month}.${date}.(${day})`;
  const time = `${hour}：${min}：${sec}`;
  
  document.getElementById('date').textContent = today;
  document.getElementById('time').textContent = time;
};

setInterval(clock, 1000);
