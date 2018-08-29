// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
    document.getElementById("headContact").style.display = "block";
  } else {
    document.getElementById("headContact").style.display = "none";
  }
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

$(function () {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function () {
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

$(window).scroll(function (e) {
  parallax();
});

//PARALLAX FUNCTION - HOME
function parallax() {
  var scrolled = $(window).scrollTop();
  var windowSize = $(window).width();
  $('.bg').css('top', -(scrolled * 0.3) + 'px');
  if (windowSize >= 700) {
    $('.bg-cbe').css('top', -(scrolled * 0.3) + 117 + 'px');
  } else {
    $('.bg-cbe').css('top', -(scrolled * 0.3) + 87 + 'px');
  }
  if (windowSize >= 700) {
    $('.bg-wts').css('top', -(scrolled * 0.3) + 117 + 'px');
  } else {
    $('.bg-wts').css('top', -(scrolled * 0.3) + 87 + 'px');
  }
  if (windowSize >= 700) {
    $('.bg-sl').css('top', -(scrolled * 0.3) + 117 + 'px');
  } else {
    $('.bg-sl').css('top', -(scrolled * 0.3) + 87 + 'px');
  }
  if (windowSize >= 700) {
    $('.bg-werdzahn').css('top', -(scrolled * 0.3) + 117 + 'px');
  } else {
    $('.bg-werdzahn').css('top', -(scrolled * 0.3) + 87 + 'px');
  }
}


//ROTATING TEXT


(function ($) {
  $.fn.extend({
    rotaterator: function (options) {

      var defaults = {
        fadeSpeed: 500,
        pauseSpeed: 6000,
        child: null
      };

      var options = $.extend(defaults, options);

      return this.each(function () {
        var o = options;
        var obj = $(this);
        var items = $(obj.children(), obj);
        items.each(function () {
          $(this).hide();
        })
        if (!o.child) {
          var next = $(obj).children(':first');
        } else {
          var next = o.child;
        }
        $(next).fadeIn(o.fadeSpeed, function () {
          $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function () {
            var next = $(this).next();
            if (next.length == 0) {
              next = $(obj).children(':first');
            }
            $(obj).rotaterator({
              child: next,
              fadeSpeed: o.fadeSpeed,
              pauseSpeed: o.pauseSpeed
            });
          })
        });
      });
    }
  });
})(jQuery);

$(document).ready(function () {
  $('#rotate').rotaterator({
    fadeSpeed: 500,
    pauseSpeed: 2000
  });
});

//ANIMATE ON SCROLL

AOS.init({
  duration: 2400,
});

//PORT MENUS

$('.toggle').click(function (e) {
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
  if (logoSlides.length === 0) return;
  var logoDots = document.getElementsByClassName("logo-demo");
  var logoCaptionText = document.getElementById("logo-caption");
  if (n > logoSlides.length) {
    logoSlideIndex = 1
  }
  if (n < 1) {
    logoSlideIndex = logoSlides.length
  }
  for (i = 0; i < logoSlides.length; i++) {
    logoSlides[i].style.display = "none";
  }
  for (i = 0; i < logoDots.length; i++) {
    logoDots[i].className = logoDots[i].className.replace(" active", "");
  }
  logoSlides[logoSlideIndex - 1].style.display = "block";
  logoDots[logoSlideIndex - 1].className += " active";
  logoCaptionText.innerHTML = logoDots[logoSlideIndex - 1].alt;
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
  if (digitalSlides.length === 0) return;
  var digitalDots = document.getElementsByClassName("digital-demo");
  var digitalCaptionText = document.getElementById("digital-caption");
  if (n > digitalSlides.length) {
    digitalSlideIndex = 1
  }
  if (n < 1) {
    digitalSlideIndex = digitalSlides.length
  }
  for (j = 0; j < digitalSlides.length; j++) {
    digitalSlides[j].style.display = "none";
  }
  for (j = 0; j < digitalDots.length; j++) {
    digitalDots[j].className = digitalDots[j].className.replace(" active", "");
  }
  digitalSlides[digitalSlideIndex - 1].style.display = "block";
  digitalDots[digitalSlideIndex - 1].className += " active";
  digitalCaptionText.innerHTML = digitalDots[digitalSlideIndex - 1].alt;
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
  if (printSlides.length === 0) return;
  var printDots = document.getElementsByClassName("print-demo");
  var printCaptionText = document.getElementById("print-caption");
  if (n > printSlides.length) {
    printSlideIndex = 1
  }
  if (n < 1) {
    printSlideIndex = printSlides.length
  }
  for (k = 0; k < printSlides.length; k++) {
    printSlides[k].style.display = "none";
  }
  for (k = 0; k < printDots.length; k++) {
    printDots[k].className = printDots[k].className.replace(" active", "");
  }
  printSlides[printSlideIndex - 1].style.display = "block";
  printDots[printSlideIndex - 1].className += " active";
  printCaptionText.innerHTML = printDots[printSlideIndex - 1].alt;
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
  if (illSlides.length === 0) return;
  var illDots = document.getElementsByClassName("ill-demo");
  var illCaptionText = document.getElementById("ill-caption");
  if (n > illSlides.length) {
    illSlideIndex = 1
  }
  if (n < 1) {
    illSlideIndex = illSlides.length
  }
  for (i = 0; i < illSlides.length; i++) {
    illSlides[i].style.display = "none";
  }
  for (i = 0; i < illDots.length; i++) {
    illDots[i].className = illDots[i].className.replace(" active", "");
  }
  illSlides[illSlideIndex - 1].style.display = "block";
  illDots[illSlideIndex - 1].className += " active";
  illCaptionText.innerHTML = illDots[illSlideIndex - 1].alt;
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
  if (slSlides.length === 0) return;
  var slDots = document.getElementsByClassName("sl-demo");
  var slCaptionText = document.getElementById("sl-caption");
  if (n > slSlides.length) {
    slSlideIndex = 1
  }
  if (n < 1) {
    slSlideIndex = slSlides.length
  }
  for (i = 0; i < slSlides.length; i++) {
    slSlides[i].style.display = "none";
  }
  for (i = 0; i < slDots.length; i++) {
    slDots[i].className = slDots[i].className.replace(" active", "");
  }
  slSlides[slSlideIndex - 1].style.display = "block";
  slDots[slSlideIndex - 1].className += " active";
  slCaptionText.innerHTML = slDots[slSlideIndex - 1].alt;
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
  if (werdzahnSlides.length === 0) return;
  var werdzahnDots = document.getElementsByClassName("werdzahn-demo");
  var werdzahnCaptionText = document.getElementById("werdzahn-caption");
  if (n > werdzahnSlides.length) {
    werdzahnSlideIndex = 1
  }
  if (n < 1) {
    werdzahnSlideIndex = werdzahnSlides.length
  }
  for (i = 0; i < werdzahnSlides.length; i++) {
    werdzahnSlides[i].style.display = "none";
  }
  for (i = 0; i < werdzahnDots.length; i++) {
    werdzahnDots[i].className = werdzahnDots[i].className.replace(" active", "");
  }
  werdzahnSlides[werdzahnSlideIndex - 1].style.display = "block";
  werdzahnDots[werdzahnSlideIndex - 1].className += " active";
  werdzahnCaptionText.innerHTML = werdzahnDots[werdzahnSlideIndex - 1].alt;
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
  if (wtsSlides.length === 0) return;
  var wtsDots = document.getElementsByClassName("wts-demo");
  var wtsCaptionText = document.getElementById("wts-caption");
  if (n > wtsSlides.length) {
    wtsSlideIndex = 1
  }
  if (n < 1) {
    wtsSlideIndex = wtsSlides.length
  }
  for (i = 0; i < wtsSlides.length; i++) {
    wtsSlides[i].style.display = "none";
  }
  for (i = 0; i < wtsDots.length; i++) {
    wtsDots[i].className = wtsDots[i].className.replace(" active", "");
  }
  wtsSlides[wtsSlideIndex - 1].style.display = "block";
  wtsDots[wtsSlideIndex - 1].className += " active";
  wtsCaptionText.innerHTML = wtsDots[wtsSlideIndex - 1].alt;
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
  if (cbeSlides.length === 0) return;
  var cbeDots = document.getElementsByClassName("cbe-demo");
  var cbeCaptionText = document.getElementById("cbe-caption");
  if (n > cbeSlides.length) {
    cbeSlideIndex = 1
  }
  if (n < 1) {
    cbeSlideIndex = cbeSlides.length
  }
  for (i = 0; i < cbeSlides.length; i++) {
    cbeSlides[i].style.display = "none";
  }
  for (i = 0; i < cbeDots.length; i++) {
    cbeDots[i].className = cbeDots[i].className.replace(" active", "");
  }
  cbeSlides[cbeSlideIndex - 1].style.display = "block";
  cbeDots[cbeSlideIndex - 1].className += " active";
  cbeCaptionText.innerHTML = cbeDots[cbeSlideIndex - 1].alt;
};

/*!
 * Lightbox v2.8.2
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 */

// Uses Node, AMD or browser globals to create a module.
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals (root is window)
    root.lightbox = factory(root.jQuery);
  }
}(this, function ($) {

  function Lightbox(options) {
    this.album = [];
    this.currentImageIndex = void 0;
    this.init();

    // options
    this.options = $.extend({}, this.constructor.defaults);
    this.option(options);
  }

  // Descriptions of all options available on the demo site:
  // http://lokeshdhakar.com/projects/lightbox2/index.html#options
  Lightbox.defaults = {
    albumLabel: 'Image %1 of %2',
    alwaysShowNavOnTouchDevices: false,
    fadeDuration: 500,
    fitImagesInViewport: true,
    // maxWidth: 800,
    // maxHeight: 600,
    positionFromTop: 50,
    resizeDuration: 700,
    showImageNumberLabel: true,
    wrapAround: false,
    disableScrolling: false
  };

  Lightbox.prototype.option = function (options) {
    $.extend(this.options, options);
  };

  Lightbox.prototype.imageCountLabel = function (currentImageNum, totalImages) {
    return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);
  };

  Lightbox.prototype.init = function () {
    this.enable();
    this.build();
  };

  // Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
  // that contain 'lightbox'. When these are clicked, start lightbox.
  Lightbox.prototype.enable = function () {
    var self = this;
    $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function (event) {
      self.start($(event.currentTarget));
      return false;
    });
  };

  // Build html for the lightbox and the overlay.
  // Attach event handlers to the new DOM elements. click click click
  Lightbox.prototype.build = function () {
    var self = this;
    $('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));

    // Cache jQuery objects
    this.$lightbox = $('#lightbox');
    this.$overlay = $('#lightboxOverlay');
    this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
    this.$container = this.$lightbox.find('.lb-container');

    // Store css values for future lookup
    this.containerTopPadding = parseInt(this.$container.css('padding-top'), 10);
    this.containerRightPadding = parseInt(this.$container.css('padding-right'), 10);
    this.containerBottomPadding = parseInt(this.$container.css('padding-bottom'), 10);
    this.containerLeftPadding = parseInt(this.$container.css('padding-left'), 10);

    // Attach event handlers to the newly minted DOM elements
    this.$overlay.hide().on('click', function () {
      self.end();
      return false;
    });

    this.$lightbox.hide().on('click', function (event) {
      if ($(event.target).attr('id') === 'lightbox') {
        self.end();
      }
      return false;
    });

    this.$outerContainer.on('click', function (event) {
      if ($(event.target).attr('id') === 'lightbox') {
        self.end();
      }
      return false;
    });

    this.$lightbox.find('.lb-prev').on('click', function () {
      if (self.currentImageIndex === 0) {
        self.changeImage(self.album.length - 1);
      } else {
        self.changeImage(self.currentImageIndex - 1);
      }
      return false;
    });

    this.$lightbox.find('.lb-next').on('click', function () {
      if (self.currentImageIndex === self.album.length - 1) {
        self.changeImage(0);
      } else {
        self.changeImage(self.currentImageIndex + 1);
      }
      return false;
    });

    this.$lightbox.find('.lb-loader, .lb-close').on('click', function () {
      self.end();
      return false;
    });
  };

  // Show overlay and lightbox. If the image is part of a set, add siblings to album array.
  Lightbox.prototype.start = function ($link) {
    var self = this;
    var $window = $(window);

    $window.on('resize', $.proxy(this.sizeOverlay, this));

    $('select, object, embed').css({
      visibility: 'hidden'
    });

    this.sizeOverlay();

    this.album = [];
    var imageNumber = 0;

    function addToAlbum($link) {
      self.album.push({
        link: $link.attr('href'),
        title: $link.attr('data-title') || $link.attr('title')
      });
    }

    // Support both data-lightbox attribute and rel attribute implementations
    var dataLightboxValue = $link.attr('data-lightbox');
    var $links;

    if (dataLightboxValue) {
      $links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
      for (var i = 0; i < $links.length; i = ++i) {
        addToAlbum($($links[i]));
        if ($links[i] === $link[0]) {
          imageNumber = i;
        }
      }
    } else {
      if ($link.attr('rel') === 'lightbox') {
        // If image is not part of a set
        addToAlbum($link);
      } else {
        // If image is part of a set
        $links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');
        for (var j = 0; j < $links.length; j = ++j) {
          addToAlbum($($links[j]));
          if ($links[j] === $link[0]) {
            imageNumber = j;
          }
        }
      }
    }

    // Position Lightbox
    var top = $window.scrollTop() + this.options.positionFromTop;
    var left = $window.scrollLeft();
    this.$lightbox.css({
      top: top + 'px',
      left: left + 'px'
    }).fadeIn(this.options.fadeDuration);

    // Disable scrolling of the page while open
    if (this.options.disableScrolling) {
      $('body').addClass('lb-disable-scrolling');
    }

    this.changeImage(imageNumber);
  };

  // Hide most UI elements in preparation for the animated resizing of the lightbox.
  Lightbox.prototype.changeImage = function (imageNumber) {
    var self = this;

    this.disableKeyboardNav();
    var $image = this.$lightbox.find('.lb-image');

    this.$overlay.fadeIn(this.options.fadeDuration);

    $('.lb-loader').fadeIn('slow');
    this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();

    this.$outerContainer.addClass('animating');

    // When image to show is preloaded, we send the width and height to sizeContainer()
    var preloader = new Image();
    preloader.onload = function () {
      var $preloader;
      var imageHeight;
      var imageWidth;
      var maxImageHeight;
      var maxImageWidth;
      var windowHeight;
      var windowWidth;

      $image.attr('src', self.album[imageNumber].link);

      $preloader = $(preloader);

      $image.width(preloader.width);
      $image.height(preloader.height);

      if (self.options.fitImagesInViewport) {
        // Fit image inside the viewport.
        // Take into account the border around the image and an additional 10px gutter on each side.

        windowWidth = $(window).width();
        windowHeight = $(window).height();
        maxImageWidth = windowWidth - self.containerLeftPadding - self.containerRightPadding - 20;
        maxImageHeight = windowHeight - self.containerTopPadding - self.containerBottomPadding - 120;

        // Check if image size is larger then maxWidth|maxHeight in settings
        if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
          maxImageWidth = self.options.maxWidth;
        }
        if (self.options.maxHeight && self.options.maxHeight < maxImageWidth) {
          maxImageHeight = self.options.maxHeight;
        }

        // Is there a fitting issue?
        if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {
          if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {
            imageWidth = maxImageWidth;
            imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
            $image.width(imageWidth);
            $image.height(imageHeight);
          } else {
            imageHeight = maxImageHeight;
            imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
            $image.width(imageWidth);
            $image.height(imageHeight);
          }
        }
      }
      self.sizeContainer($image.width(), $image.height());
    };

    preloader.src = this.album[imageNumber].link;
    this.currentImageIndex = imageNumber;
  };

  // Stretch overlay to fit the viewport
  Lightbox.prototype.sizeOverlay = function () {
    this.$overlay
      .width($(document).width())
      .height($(document).height());
  };

  // Animate the size of the lightbox to fit the image we are showing
  Lightbox.prototype.sizeContainer = function (imageWidth, imageHeight) {
    var self = this;

    var oldWidth = this.$outerContainer.outerWidth();
    var oldHeight = this.$outerContainer.outerHeight();
    var newWidth = imageWidth + this.containerLeftPadding + this.containerRightPadding;
    var newHeight = imageHeight + this.containerTopPadding + this.containerBottomPadding;

    function postResize() {
      self.$lightbox.find('.lb-dataContainer').width(newWidth);
      self.$lightbox.find('.lb-prevLink').height(newHeight);
      self.$lightbox.find('.lb-nextLink').height(newHeight);
      self.showImage();
    }

    if (oldWidth !== newWidth || oldHeight !== newHeight) {
      this.$outerContainer.animate({
        width: newWidth,
        height: newHeight
      }, this.options.resizeDuration, 'swing', function () {
        postResize();
      });
    } else {
      postResize();
    }
  };

  // Display the image and its details and begin preload neighboring images.
  Lightbox.prototype.showImage = function () {
    this.$lightbox.find('.lb-loader').stop(true).hide();
    this.$lightbox.find('.lb-image').fadeIn('slow');

    this.updateNav();
    this.updateDetails();
    this.preloadNeighboringImages();
    this.enableKeyboardNav();
  };

  // Display previous and next navigation if appropriate.
  Lightbox.prototype.updateNav = function () {
    // Check to see if the browser supports touch events. If so, we take the conservative approach
    // and assume that mouse hover events are not supported and always show prev/next navigation
    // arrows in image sets.
    var alwaysShowNav = false;
    try {
      document.createEvent('TouchEvent');
      alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;
    } catch (e) {}

    this.$lightbox.find('.lb-nav').show();

    if (this.album.length > 1) {
      if (this.options.wrapAround) {
        if (alwaysShowNav) {
          this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
        }
        this.$lightbox.find('.lb-prev, .lb-next').show();
      } else {
        if (this.currentImageIndex > 0) {
          this.$lightbox.find('.lb-prev').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-prev').css('opacity', '1');
          }
        }
        if (this.currentImageIndex < this.album.length - 1) {
          this.$lightbox.find('.lb-next').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-next').css('opacity', '1');
          }
        }
      }
    }
  };

  // Display caption, image number, and closing button.
  Lightbox.prototype.updateDetails = function () {
    var self = this;

    // Enable anchor clicks in the injected caption html.
    // Thanks Nate Wright for the fix. @https://github.com/NateWr
    if (typeof this.album[this.currentImageIndex].title !== 'undefined' &&
      this.album[this.currentImageIndex].title !== '') {
      this.$lightbox.find('.lb-caption')
        .html(this.album[this.currentImageIndex].title)
        .fadeIn('fast')
        .find('a').on('click', function (event) {
          if ($(this).attr('target') !== undefined) {
            window.open($(this).attr('href'), $(this).attr('target'));
          } else {
            location.href = $(this).attr('href');
          }
        });
    }

    if (this.album.length > 1 && this.options.showImageNumberLabel) {
      var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
      this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');
    } else {
      this.$lightbox.find('.lb-number').hide();
    }

    this.$outerContainer.removeClass('animating');

    this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function () {
      return self.sizeOverlay();
    });
  };

  // Preload previous and next images in set.
  Lightbox.prototype.preloadNeighboringImages = function () {
    if (this.album.length > this.currentImageIndex + 1) {
      var preloadNext = new Image();
      preloadNext.src = this.album[this.currentImageIndex + 1].link;
    }
    if (this.currentImageIndex > 0) {
      var preloadPrev = new Image();
      preloadPrev.src = this.album[this.currentImageIndex - 1].link;
    }
  };

  Lightbox.prototype.enableKeyboardNav = function () {
    $(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this));
  };

  Lightbox.prototype.disableKeyboardNav = function () {
    $(document).off('.keyboard');
  };

  Lightbox.prototype.keyboardAction = function (event) {
    var KEYCODE_ESC = 27;
    var KEYCODE_LEFTARROW = 37;
    var KEYCODE_RIGHTARROW = 39;

    var keycode = event.keyCode;
    var key = String.fromCharCode(keycode).toLowerCase();
    if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
      this.end();
    } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
      if (this.currentImageIndex !== 0) {
        this.changeImage(this.currentImageIndex - 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(this.album.length - 1);
      }
    } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
      if (this.currentImageIndex !== this.album.length - 1) {
        this.changeImage(this.currentImageIndex + 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(0);
      }
    }
  };

  // Closing time. :-(
  Lightbox.prototype.end = function () {
    this.disableKeyboardNav();
    $(window).off('resize', this.sizeOverlay);
    this.$lightbox.fadeOut(this.options.fadeDuration);
    this.$overlay.fadeOut(this.options.fadeDuration);
    $('select, object, embed').css({
      visibility: 'visible'
    });
    if (this.options.disableScrolling) {
      $('body').removeClass('lb-disable-scrolling');
    }
  };

  return new Lightbox();
}));


//   var date = new Date()
//   document.write(date.getFullYear())
//   document.getElementById('date').innerHTML = date;