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
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

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