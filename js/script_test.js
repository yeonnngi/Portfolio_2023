  /* --------------- ball ani --------------- */
  $(document).ready(function () {
    $.each($(".ball"), function (index, obj) {
      $(obj).css({
        "animation-timing-function": "linear",
        "animation-name": "bounce",
        "animation-duration": "1.2s",
        "animation-iteration-count": "1",
        "animation-direction": "normal",
        "animation-delay": (0.5 * index) + "s",
      });
    });
  });



  /* --------------- circleCursor --------------- */
  const docuE = document.documentElement;
  const newCursor = document.getElementById("circleCursor");
  let posX = 0;
  let posY = 0;

  //마우스가 body 안에 움직일때의 이벤트
  document.addEventListener('DOMContentLoaded', () => {
    document.body.onmousemove = function (e) {
      //마우스 x,y좌표 저장
      posX = e.clientX + "px";
      posY = e.clientY + "px";

      newCursor.style.left = posX;
      newCursor.style.top = posY;
    }



    /* --------------- clock --------------- */
    const clock = document.getElementById("clock");

    function getClock() {
      const date = new Date()
      const hour = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const second = String(date.getSeconds()).padStart(2, "0");
      //number이기 때문에 padStart 붙일 수 없음. String 변환해주어야한다.
      clock.innerText = `${hour}:${minutes}:${second}`;
    }
    getClock();
    setInterval(getClock, 1000);



    /* --------------- page --------------- */
    const navMenu = document.querySelectorAll('.menu .menu_item');

    navMenu.forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.active')[0].classList.remove('active');
        item.classList.add('active');
      })
    })


    /* document.querySelectorAll('.scroll_content').forEach(sc => {
      ps = new PerfectScrollbar(sc, {
        suppressScrollX: true,
        scrollYMarginOffset: 50,
        wheelSpeed: 1
      })
    }); */

    window.addEventListener("resize", () => {
      vh = window.innerHeight;
      vw = window.innerWidth;

      document.body.classList.add("no-transition");

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("no-transition");
      }, 400);
    });
  });