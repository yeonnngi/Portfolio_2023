  /* --------------- ball ani --------------- */
  $(document).ready(function () {
    $.each($(".ball"), function (index, obj) {
      $(obj).css({
        "animation-timing-function": "linear",
        "animation-name": "bounce",
        "animation-duration": "1s",
        "animation-iteration-count": "0.8",
        "animation-direction": "normal",
        "animation-delay": (0.3 * index) + "s",
        "animation-fill-mode": "forwards",
        "animation-play-state": "running"
      });
    });
  });

  $(function () {
    const page = $('.scroll_content')

    page.mousewheel(function (e, delta) {
      if (delta > 0) {
        let prev = $(this).prev().offset().top
        $('.about .container_inner').stop().animate({
          scrollTop: prev
        }, 1000) //위로 올라갈때 스륵하게
      } else if (delta < 0) {
        let next = $(this).next().offset().top
        $('.about .container_inner').stop().animate({
          scrollTop: next
        }, 1000)
      }
    }) //page_mousewheel_event
  })


  //마우스가 body 안에 움직일때의 이벤트
  document.addEventListener('DOMContentLoaded', () => {
    document.body.onmousemove = function (e) {
      const newCursor = document.getElementById("circleCursor");
      let posX = 0;
      let posY = 0;

      //마우스 x,y좌표 저장
      posX = e.clientX + "px";
      posY = e.clientY + "px";

      newCursor.style.left = posX;
      newCursor.style.top = posY;
    }


    /* --------------- clock --------------- */
    const clock = document.getElementById("clock");

    function getClock() {
      let date = new Date();
      let hour = String(date.getHours()).padStart(2, "0");
      let minutes = String(date.getMinutes()).padStart(2, "0");
      let second = String(date.getSeconds()).padStart(2, "0");
      //number이기 때문에 padStart 붙일 수 없음. String 변환해주어야한다.
      clock.innerText = `${hour} : ${minutes} : ${second}`;
    }

    getClock();
    setInterval(getClock, 1000);


    /* --------------- page --------------- */
    const container = document.querySelectorAll('.container');
    const home = document.querySelector('.container.home');
    const about = document.querySelector('.container.about');
    const gallery = document.querySelector('.container.gallery');
    const skills = document.querySelector('.container.skills');
    const projects = document.querySelector('.container.projects');
    const contact = document.querySelector('.container.contact');
    const mainTitle = document.querySelector('.header .main_title');
    const pathAbo = document.querySelector('.container.about .path');
    const pathSkil = document.querySelector('.container.skills .path');
    const pathPro = document.querySelector('.container.projects .path');
    const pathCon = document.querySelector('.container.contact .path');

    container.forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.active')[0].classList.remove('active');
        item.classList.add('active');
      })
    })

    home.addEventListener('click', () => {
      mainTitle.innerHTML = 'Hello, I’m Giyeon !'
    })

    about.addEventListener('click', () => {
      mainTitle.innerHTML = 'About';
    })

    gallery.addEventListener('click', () => {
      mainTitle.innerHTML = 'Gallery';
    })

    skills.addEventListener('click', () => {
      mainTitle.innerHTML = 'Skills';
    })

    projects.addEventListener('click', () => {
      mainTitle.innerHTML = 'Projects';
    })

    contact.addEventListener('click', () => {
      mainTitle.innerHTML = 'Contact';
    })

    document.querySelectorAll('.scroll_content').forEach(sc => {
      ps = new PerfectScrollbar(sc, {
        suppressScrollX: true,
        scrollYMarginOffset: 50,
        wheelSpeed: 1
      })
    });

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


  /* --------------- home --------------- */
  function showTxtA() {
    document.querySelector(".txtA").style.opacity = 1;
  }
  self.setTimeout("showTxtA()", 2600);

  function hideTxtA() {
    document.querySelector(".txtA").style.opacity = 0;
  }
  self.setTimeout("hideTxtA()", 4800);

  function showTxtB() {
    document.querySelector(".txtB h1").style.opacity = "1";
  }
  self.setTimeout("showTxtB()", 6000);

  function showTxtC() {
    document.querySelector(".txtC p").style.opacity = "1";
  }
  self.setTimeout("showTxtC()", 7500); 

  function nextAbout() {
    document.querySelector(".container.home .next_notice").style.opacity = "1";
  }
  self.setTimeout("nextAbout()", 8500); 


  const about = document.querySelector('.container.about');
  const gallery = document.querySelector('.container.gallery');
  const skills = document.querySelector('.container.skills');
  const projects = document.querySelector('.container.projects');
  const scrollAbo = document.querySelector('.container.about .aboutSD');
  const nxtSkills = document.querySelector('.container.gallery .nxtSkills');
  const nxtProject = document.querySelector('.container.skills .nxtProject');
  const nxtContact = document.querySelector('.container.projects .nxtContact');
  const aboutInner = document.querySelector('.container.about .container_inner');

  about.addEventListener('click', () => {
    scrollAbo.style.opacity = '1';
  }, 5000)


  aboutInner.addEventListener('scroll', () => {
    if (window.scrollTop < 500) {
      gsap.to(nxtSkills, 0.3, {
        opacity: 0
      })
    } else {
      gsap.to(nxtSkills, 0.3, {
        opacity: 1
      })
    }
  }); //topBtn_event

  gallery.addEventListener('click', () => {
    nxtSkills.style.opacity = '1';
  }, 5000)

  skills.addEventListener('click', () => {
    nxtProject.style.opacity = '1';
  }, 5000)

  projects.addEventListener('click', () => {
    nxtContact.style.opacity = '1';
  }, 5000)


  /* --------------- contact --------------- */
  (function () {
    emailjs.init('1D37eO2fAV9sq-YWg');
  })();

  window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_ssddjea', 'template_0spz8ad', this)
        .then(function (response) {
          console.log('SUCCESS!', response);
          alert('소중한 메일 감사합니다! 빠른 답장드리도록 하겠습니다.');
          window.location.reload();
        }, function (error) {
          console.log('FAILED...', error);
          alert('정상적인 제출이 이루어지지 않았습니다. 다시 시도해주세요!');
        });
    });
  }

  /*   .then(function (response) {
      alert('소중한 메일 감사합니다! 빠른 답장드리도록 하겠습니다.');
      window.location.reload();
    }, function (error) {
      alert('정상적인 제출이 이루어지지 않았습니다. 다시 시도해주세요!');
    }); */