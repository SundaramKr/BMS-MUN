 (function ($) {
  "use strict";

    /*===========================================
        =    On Load Function      =
    =============================================*/
  $(window).on("load", function () {
    preloader();
    initCounter();
    wowAnimation();
  });

    /*===========================================
        =    Preloader      =
    =============================================*/
  function preloader() {
    $('.cs-preloader').delay(0).fadeOut();

  }

    /*===========================================
        =    Video Popup      =
    =============================================*/
  $('#videoModal').on('hide.bs.modal', stopVideoPlayback);
  function stopVideoPlayback() {
    var $video = $('#youtubeVideo');
    var src = $video.attr('src');
    $video.attr('src', '');
    $video.attr('src', src);
  }

    /*===========================================
        =    Hiding Canvas Menu      =
    =============================================*/
  let scrollPosition = 0;
  function hideOffcanvasMenu() {
    var offcanvasElement = $('#cs-mobile-menu');
    var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement[0]);
    bsOffcanvas.hide();
  }
  $('#cs-mobile-menu').on('show.bs.offcanvas', function () {
    scrollPosition = $(window).scrollTop();
  });

  $('#cs-mobile-menu').on('hide.bs.offcanvas', function () {
    $(window).scrollTop(scrollPosition);
  });

  $('.cs-mobile-menu a').on('click', function (e) {
    e.preventDefault();
    hideOffcanvasMenu();
    setTimeout(function () {
      window.location.href = e.target.href;
    }, 300);
  });

    /*===========================================
        =    Counter Animation      =
    =============================================*/
  function initCounter() {
    $('.counter-value').each(function () {
      var $this = $(this);
      var countTo = $this.data('counter');
      $({ countNum: $this.text() }).animate({ countNum: countTo }, {
        duration: 2000,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }
      });
    });
  }

    /*===========================================
        =    Service Slider     =
    =============================================*/
  $('.cs-service-slider').each(function () {
    new Swiper(this, {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        980: {
          slidesPerView: 2,
          spaceBetween: 20,
          resistanceRatio: 0.85
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 20,
          resistanceRatio : 0
        }
      },
      keyboard: {
        enabled: true,
      }
    });
  });

  /*===========================================
        =    Testimonial Slider     =
    =============================================*/
  var swiper = new Swiper(".cs-testimonial-slider", {
    slidesPerView: 1,
    rewind: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
      // loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + 
        ' / ' + 
        '<span class="' + totalClass + '"></span>';
      },
      formatFractionCurrent: function (number) {
        return number < 10 ? '0' + number : number;
      },
      formatFractionTotal: function (number) {
        return number < 10 ? '0' + number : number;
      }
    },
    navigation: {
      nextEl: ".swiper-nav-next",
      prevEl: ".swiper-nav-prev",
    },
  });

   /*===========================================
        =        Wow Active         =
    =============================================*/
  function wowAnimation() {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true
    });
    wow.init();
  }
  
     /*===========================================
  =         Scroll To Top         =
    =============================================*/
  if($('.cs-scroll-top')) {
    var scrollTopbtn = document.querySelector('.cs-scroll-top');
    var progressPath = document.querySelector('.cs-scroll-top path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 750;
    jQuery(window).on('scroll', function() {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(scrollTopbtn).addClass('show');
      } else {
        jQuery(scrollTopbtn).removeClass('show');
      }
    });
    jQuery(scrollTopbtn).on('click', function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, 1);
      return false;
    })
  }

})(jQuery);


let width = screen.width;
if(width<992){
  document.getElementById('coordinator').classList.remove("pb-3");
  document.getElementById('oc-team').classList.remove("pt-3");
  document.getElementById('prize-hero').classList.remove("pb-3");
  document.getElementById('prize-ladder').classList.remove("pt-3");
}

let clickTimes = [];

document.getElementById("krishna-ee").addEventListener("click", function() {
    const now = Date.now();

    clickTimes = clickTimes.filter(time => now - time < 2000);

    clickTimes.push(now);

    if (clickTimes.length >= 6) {
      document.getElementById("krishna-ee-img").src="assets/images/krishna.jpg";
      clickTimes = [];
    }
});

document.getElementById("shishir-ee").addEventListener("click", function() {
  const now = Date.now();

  clickTimes = clickTimes.filter(time => now - time < 2000);

  clickTimes.push(now);

  if (clickTimes.length >= 6) {
    document.getElementById("shishir-ee-img").src="assets/images/shishir-hehe.jpg";
    clickTimes = [];
  }
});

document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
  tab.addEventListener("click", function() {
      document.querySelectorAll('[data-bs-toggle="tab"]').forEach(btn => {
          btn.classList.remove("active");
          btn.setAttribute("aria-selected", "false");
      });

      this.classList.add("active");
      this.setAttribute("aria-selected", "true");

      document.querySelectorAll('[role="tabpanel"]').forEach(tp => {
          tp.classList.remove("active");
          tp.classList.remove("show")
          let btnid = ""+this.id;
          let tpid = btnid.substring(0,btnid.indexOf('-'));
          document.getElementById(tpid).classList.add("show", "active");
      });
  });
});