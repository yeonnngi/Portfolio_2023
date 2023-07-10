    /* --------------- haggen_modal --------------- */
    $(document).ready(function () {
      $('.hdPro_open').click(function () {
        $('.haggen_modal .modal_proposal').fadeIn(0);
      });
      $('.hdPro_close').click(function () {
        $('.haggen_modal .modal_proposal').fadeOut(0);
      });
    })

    $(document).ready(function () {
      $('.hdCode_open').click(function () {
        $('.haggen_modal .modal_code').fadeIn(0);
      });
      $('.hdCode_close').click(function () {
        $('.haggen_modal .modal_code').fadeOut(0);
      });
    })
    /* --------------- IK_modal --------------- */
    $(document).ready(function () {
      $('.ikPro_open').click(function () {
        $('.ik_modal .modal_proposal').fadeIn(0);
      });
      $('.ikPro_close').click(function () {
        $('.ik_modal .modal_proposal').fadeOut(0);
      });
    })

    $(document).ready(function () {
      $('.ikCode_open').click(function () {
        $('.ik_modal .modal_code').fadeIn(0);
      });
      $('.ikCode_close ').click(function () {
        $('.ik_modal .modal_code').fadeOut(0);
      });
    })
    /* --------------- login_modal --------------- */
    $(document).ready(function () {
      $('.lgProto_open').click(function () {
        $('.login_modal .modal_proposal').fadeIn(0);
      });
      $('.lgProto_close').click(function () {
        $('.login_modal .modal_proposal').fadeOut(0);
      });
    })

    $(document).ready(function () {
      $('.lgCode_open').click(function () {
        $('.login_modal .modal_code').fadeIn(0);
      });
      $('.lgCode_close ').click(function () {
        $('.login_modal .modal_code').fadeOut(0);
      });
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


      /* --------------- page --------------- */
      const ikCodeTab = document.querySelectorAll('.ik_modal .code_tab ul li');
      const ikCodeDetail = document.querySelectorAll('.ik_modal .code_detail ul li');

      const hdCodeTab = document.querySelectorAll('.haggen_modal .code_tab ul li');
      const hdCodeDetail = document.querySelectorAll('.haggen_modal .code_detail ul li');

      const lgCodeTab = document.querySelectorAll('.login_modal .code_tab ul li');
      const lgCodeDetail = document.querySelectorAll('.login_modal .code_detail ul li');

      ikCodeTab.forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.ikTab_on')[0].classList.remove('ikTab_on');
          tab.classList.add('ikTab_on');
        });
      });

      ikCodeTab.forEach((tab, i) => {
        tab.addEventListener('click', function () {
          ikCodeDetail.forEach((item) => {
            item.classList.remove('ikCode_on');
            ikCodeDetail[i].classList.add('ikCode_on');
          });
        });
      });

      hdCodeTab.forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.hdTab_on')[0].classList.remove('hdTab_on');
          tab.classList.add('hdTab_on');
        });
      });

      hdCodeTab.forEach((tab, i) => {
        tab.addEventListener('click', function () {
          hdCodeDetail.forEach((item) => {
            item.classList.remove('hdCode_on');
            hdCodeDetail[i].classList.add('hdCode_on');
          });
        });
      });

      lgCodeTab.forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.lgTab_on')[0].classList.remove('lgTab_on');
          tab.classList.add('lgTab_on');
        });
      });

      lgCodeTab.forEach((tab, i) => {
        tab.addEventListener('click', function () {
          lgCodeDetail.forEach((item) => {
            item.classList.remove('lgCode_on');
            lgCodeDetail[i].classList.add('lgCode_on');
          });
        });
      });
    });

    const proLnb = document.querySelectorAll('.header_box .lnb ul li');
    const proDetail = document.querySelectorAll('.content .project');

    proLnb.forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.li_on')[0].classList.remove('li_on');
        tab.classList.add('li_on');
      });
    });

    proLnb.forEach((tab, i) => {
      tab.addEventListener('click', function () {
        proDetail.forEach((item) => {
          item.classList.remove('on');
          proDetail[i].classList.add('on');
        });
      });
    });


    /* --------------- home --------------- */
    function showTxtA() {
      document.querySelector(".txtA").style.opacity = 1;
    }
    self.setTimeout("showTxtA()", 2600); // 초 지정

    function hideTxtA() {
      document.querySelector(".txtA").style.opacity = 0;
    }
    self.setTimeout("hideTxtA()", 4800); // 초 지정

    function showTxtB() {
      document.querySelector(".txtB h1").style.opacity = "1";
    }
    self.setTimeout("showTxtB()", 6000); // 초 지정

    function showTxtC() {
      document.querySelector(".txtC p").style.opacity = "1";
    }
    self.setTimeout("showTxtC()", 7500); // 초 지정

    function nextAbout() {
      document.querySelector(".container.home .next_notice").style.opacity = "1";
    }
    self.setTimeout("nextAbout()", 8500); // 초 지정


    const about = document.querySelector('.container.about');
    const scrollAbo = document.querySelector('.container.about .aboutScroll');
    const nxtSkills = document.querySelector('.container.about .nxtSkills');
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