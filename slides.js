var slides = {};

(function() {

  var iframe, win;

  slides.idx = 1;

  slides.setSlide = function(i) {
    slides.idx = i;
    win.postMessage("setSlide(" + i + ")", "*");
  }

  slides.prev = function() {win.postMessage("back", "*");}
  slides.next = function() {win.postMessage("forward", "*");}

  window.addEventListener("load", function() {
    iframe = $("iframe[name=slidesview]");
    win = iframe.contentWindow;
  }, true);

})();
