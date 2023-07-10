document.onload = loadClock();

function loadClock() {
  var today = new Date();
  var h = today.getHours();
  var m = checkTime(today.getMinutes());
  var $clock = document.getElementById('clock');

  $clock.classList.toggle('dot');
  $clock.innerHTML= h + '&nbsp;' + m;

  var t = setTimeout(loadClock, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }

  return i;
}