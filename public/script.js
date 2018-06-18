// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// };

$(function() {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('.smoothScroll').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000); // The number here represents the speed of the scroll in milliseconds
          return false;
        }
      }
    });
  });
  
  // Change the speed to whatever you want
  // Personally i think 1000 is too much
  // Try 800 or below, it seems not too much but it will make a difference

$(window).scroll(function(e){
  parallax();
});

//PARALLAX FUNCTION
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg').css('top',-(scrolled*0.3)+'px');
}

//TEXT ANIMATION

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 100;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

//ANIMATE ON SCROLL

AOS.init({
  duration: 2400,
});

//PORT MENUS

$('.toggle').click(function(e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});

//Portfolio

function devMenu() {
    var x = document.getElementById("myDevMenu");
    if (x.className === "dev-menu") {
        x.className += " responsive";
    } else {
        x.className = "dev-menu";
    }
};
function desMenu() {
    var x = document.getElementById("myDesMenu");
    if (x.className === "des-menu") {
        x.className += " responsive";
    } else {
        x.className = "des-menu";
    }
};
function illMenu() {
    var x = document.getElementById("myIllMenu");
    if (x.className === "ill-menu") {
        x.className += " responsive";
    } else {
        x.className = "ill-menu";
    }
};

// LOGO LIGHTBOX

function openLogoModal() {
    document.getElementById('myLogoModal').style.display = "block";
  }
  
  function closeLogoModal() {
    document.getElementById('myLogoModal').style.display = "none";
  }
  
  var logoSlideIndex = 1;
  logoShowSlides(logoSlideIndex);
  
  function logoPlusSlides(n) {
    logoShowSlides(logoSlideIndex += n);
  }
  
  function logoCurrentSlide(n) {
    logoShowSlides(logoSlideIndex = n);
  }
  
  function logoShowSlides(n) {
    var i;
    var logoSlides = document.getElementsByClassName("myLogoSlides");
    if(logoSlides.length === 0) return;
    var logoDots = document.getElementsByClassName("logo-demo");
    var logoCaptionText = document.getElementById("logo-caption");
    if (n > logoSlides.length) {logoSlideIndex = 1}
    if (n < 1) {logoSlideIndex = logoSlides.length}
    for (i = 0; i < logoSlides.length; i++) {
        logoSlides[i].style.display = "none";
    }
    for (i = 0; i < logoDots.length; i++) {
        logoDots[i].className = logoDots[i].className.replace(" active", "");
    }
    logoSlides[logoSlideIndex-1].style.display = "block";
    logoDots[logoSlideIndex-1].className += " active";
    logoCaptionText.innerHTML = logoDots[logoSlideIndex-1].alt;
  };

//   DIGITAL LIGHTBOX

function openDigitalModal() {
    document.getElementById('myDigitalModal').style.display = "block";
  }
  
  function closeDigitalModal() {
    document.getElementById('myDigitalModal').style.display = "none";
  }
  
  var digitalSlideIndex = 1;
  digitalShowSlides(digitalSlideIndex);
  
  function digitalPlusSlides(n) {
    digitalShowSlides(digitalSlideIndex += n);
  }
  
  function digitalCurrentSlide(n) {
    digitalShowSlides(digitalSlideIndex = n);
  }
  
  function digitalShowSlides(n) {
    var j;
    var digitalSlides = document.getElementsByClassName("myDigitalSlides");
    if(digitalSlides.length === 0) return;
    var digitalDots = document.getElementsByClassName("digital-demo");
    var digitalCaptionText = document.getElementById("digital-caption");
    if (n > digitalSlides.length) {digitalSlideIndex = 1}
    if (n < 1) {digitalSlideIndex = digitalSlides.length}
    for (j = 0; j < digitalSlides.length; j++) {
        digitalSlides[j].style.display = "none";
    }
    for (j = 0; j < digitalDots.length; j++) {
        digitalDots[j].className = digitalDots[j].className.replace(" active", "");
    }
    digitalSlides[digitalSlideIndex-1].style.display = "block";
    digitalDots[digitalSlideIndex-1].className += " active";
    digitalCaptionText.innerHTML = digitalDots[digitalSlideIndex-1].alt;
  };

//   PRINT LIGHTBOX

function openPrintModal() {
    document.getElementById('myPrintModal').style.display = "block";
  }
  
  function closePrintModal() {
    document.getElementById('myPrintModal').style.display = "none";
  }
  
  var printSlideIndex = 1;
  printShowSlides(printSlideIndex);
  
  function printPlusSlides(n) {
    printShowSlides(printSlideIndex += n);
  }
  
  function printCurrentSlide(n) {
    printShowSlides(printSlideIndex = n);
  }
  
  function printShowSlides(n) {
    var k;
    var printSlides = document.getElementsByClassName("myPrintSlides");
    if(printSlides.length === 0) return;
    var printDots = document.getElementsByClassName("print-demo");
    var printCaptionText = document.getElementById("print-caption");
    if (n > printSlides.length) {printSlideIndex = 1}
    if (n < 1) {printSlideIndex = printSlides.length}
    for (k = 0; k < printSlides.length; k++) {
        printSlides[k].style.display = "none";
    }
    for (k = 0; k < printDots.length; k++) {
        printDots[k].className = printDots[k].className.replace(" active", "");
    }
    printSlides[printSlideIndex-1].style.display = "block";
    printDots[printSlideIndex-1].className += " active";
    printCaptionText.innerHTML = printDots[printSlideIndex-1].alt;
  };

  //   ILLUSTRATION LIGHTBOX

function openIllModal() {
    document.getElementById('myIllModal').style.display = "block";
  }
  
  function closeIllModal() {
    document.getElementById('myIllModal').style.display = "none";
  }
  
  var illSlideIndex = 1;
  illShowSlides(illSlideIndex);
  
  function illPlusSlides(n) {
    illShowSlides(illSlideIndex += n);
  }
  
  function illCurrentSlide(n) {
    illShowSlides(illSlideIndex = n);
  }
  
  function illShowSlides(n) {
    var i;
    var illSlides = document.getElementsByClassName("myIllSlides");
    if(illSlides.length === 0) return;
    var illDots = document.getElementsByClassName("ill-demo");
    var illCaptionText = document.getElementById("ill-caption");
    if (n > illSlides.length) {illSlideIndex = 1}
    if (n < 1) {illSlideIndex = illSlides.length}
    for (i = 0; i < illSlides.length; i++) {
        illSlides[i].style.display = "none";
    }
    for (i = 0; i < illDots.length; i++) {
        illDots[i].className = illDots[i].className.replace(" active", "");
    }
    illSlides[illSlideIndex-1].style.display = "block";
    illDots[illSlideIndex-1].className += " active";
    illCaptionText.innerHTML = illDots[illSlideIndex-1].alt;
  };

  //   SPEAK LOUDER LIGHTBOX

  function openSLModal() {
    document.getElementById('mySLModal').style.display = "block";
  }
  
  function closeSLModal() {
    document.getElementById('mySLModal').style.display = "none";
  }
  
  var slSlideIndex = 1;
  slShowSlides(slSlideIndex);
  
  function slPlusSlides(n) {
    slShowSlides(slSlideIndex += n);
  }
  
  function slCurrentSlide(n) {
    slShowSlides(slSlideIndex = n);
  }
  
  function slShowSlides(n) {
    var i;
    var slSlides = document.getElementsByClassName("mySLSlides");
    if(slSlides.length === 0) return;
    var slDots = document.getElementsByClassName("sl-demo");
    var slCaptionText = document.getElementById("sl-caption");
    if (n > slSlides.length) {slSlideIndex = 1}
    if (n < 1) {slSlideIndex = slSlides.length}
    for (i = 0; i < slSlides.length; i++) {
        slSlides[i].style.display = "none";
    }
    for (i = 0; i < slDots.length; i++) {
        slDots[i].className = slDots[i].className.replace(" active", "");
    }
    slSlides[slSlideIndex-1].style.display = "block";
    slDots[slSlideIndex-1].className += " active";
    slCaptionText.innerHTML = slDots[slSlideIndex-1].alt;
  };

  //   WERDZAHN LIGHTBOX

  function openWerdzahnModal() {
    document.getElementById('myWerdzahnModal').style.display = "block";
  }
  
  function closeWerdzahnModal() {
    document.getElementById('myWerdzahnModal').style.display = "none";
  }
  
  var werdzahnSlideIndex = 1;
  werdzahnShowSlides(werdzahnSlideIndex);
  
  function werdzahnPlusSlides(n) {
    werdzahnShowSlides(werdzahnSlideIndex += n);
  }
  
  function werdzahnCurrentSlide(n) {
    werdzahnShowSlides(werdzahnSlideIndex = n);
  }
  
  function werdzahnShowSlides(n) {
    var i;
    var werdzahnSlides = document.getElementsByClassName("myWerdzahnSlides");
    if(werdzahnSlides.length === 0) return;
    var werdzahnDots = document.getElementsByClassName("werdzahn-demo");
    var werdzahnCaptionText = document.getElementById("werdzahn-caption");
    if (n > werdzahnSlides.length) {werdzahnSlideIndex = 1}
    if (n < 1) {werdzahnSlideIndex = werdzahnSlides.length}
    for (i = 0; i < werdzahnSlides.length; i++) {
      werdzahnSlides[i].style.display = "none";
    }
    for (i = 0; i < werdzahnDots.length; i++) {
      werdzahnDots[i].className = werdzahnDots[i].className.replace(" active", "");
    }
    werdzahnSlides[werdzahnSlideIndex-1].style.display = "block";
    werdzahnDots[werdzahnSlideIndex-1].className += " active";
    werdzahnCaptionText.innerHTML = werdzahnDots[werdzahnSlideIndex-1].alt;
  };

  //   WORDS TO SONG LIGHTBOX

  function openWTSModal() {
    document.getElementById('myWTSModal').style.display = "block";
  }
  
  function closeWTSModal() {
    document.getElementById('myWTSModal').style.display = "none";
  }
  
  var wtsSlideIndex = 1;
  wtsShowSlides(wtsSlideIndex);
  
  function wtsPlusSlides(n) {
    wtsShowSlides(wtsSlideIndex += n);
  }
  
  function wtsCurrentSlide(n) {
    wtsShowSlides(wtsSlideIndex = n);
  }
  
  function wtsShowSlides(n) {
    var i;
    var wtsSlides = document.getElementsByClassName("myWTSSlides");
    if(wtsSlides.length === 0) return;
    var wtsDots = document.getElementsByClassName("wts-demo");
    var wtsCaptionText = document.getElementById("wts-caption");
    if (n > wtsSlides.length) {wtsSlideIndex = 1}
    if (n < 1) {wtsSlideIndex = wtsSlides.length}
    for (i = 0; i < wtsSlides.length; i++) {
      wtsSlides[i].style.display = "none";
    }
    for (i = 0; i < wtsDots.length; i++) {
      wtsDots[i].className = wtsDots[i].className.replace(" active", "");
    }
    wtsSlides[wtsSlideIndex-1].style.display = "block";
    wtsDots[wtsSlideIndex-1].className += " active";
    wtsCaptionText.innerHTML = wtsDots[wtsSlideIndex-1].alt;
  };
  
    //   CBE LIGHTBOX

    function openCBEModal() {
      document.getElementById('myCBEModal').style.display = "block";
    }
    
    function closeCBEModal() {
      document.getElementById('myCBEModal').style.display = "none";
    }
    
    var cbeSlideIndex = 1;
    cbeShowSlides(cbeSlideIndex);
    
    function cbePlusSlides(n) {
      cbeShowSlides(cbeSlideIndex += n);
    }
    
    function cbeCurrentSlide(n) {
      cbeShowSlides(cbeSlideIndex = n);
    }
    
    function cbeShowSlides(n) {
      var i;
      var cbeSlides = document.getElementsByClassName("myCBESlides");
      if(cbeSlides.length === 0) return;
      var cbeDots = document.getElementsByClassName("cbe-demo");
      var cbeCaptionText = document.getElementById("cbe-caption");
      if (n > cbeSlides.length) {cbeSlideIndex = 1}
      if (n < 1) {cbeSlideIndex = cbeSlides.length}
      for (i = 0; i < cbeSlides.length; i++) {
        cbeSlides[i].style.display = "none";
      }
      for (i = 0; i < cbeDots.length; i++) {
        cbeDots[i].className = cbeDots[i].className.replace(" active", "");
      }
      cbeSlides[cbeSlideIndex-1].style.display = "block";
      cbeDots[cbeSlideIndex-1].className += " active";
      cbeCaptionText.innerHTML = cbeDots[cbeSlideIndex-1].alt;
    };


//   var date = new Date()
//   document.write(date.getFullYear())
//   document.getElementById('date').innerHTML = date;
