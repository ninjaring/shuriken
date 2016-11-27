function thumbmarker(x) {
  if (x = 'x')
    x = document.getElementsByClassName('iis-current-slide')[0].getAttribute('id').slice(3);
  var thumbs = document.getElementsByClassName('single-thumbnail');
  for (var i = 0; i < thumbs.length; i++) {
    if (i+1 == x) {
      thumbs[i].setAttribute('style', 'border-color: #000000;');
    }
    else {
      thumbs[i].setAttribute('style','border-color: transparent;')
    }
  }
}

var slider = new IdealImageSlider.Slider({
    selector: '#slidewrapper',
    height: 405,
    initialHeight: 405,
    interval: 4000,
    transitionDuration: 700,
    effect: 'slide', // slide or fade
    disableNav: false,
    keyboardNav: true,
    onInit: function(){
      thumbmarker('x');
    },
    afterChange: function(){
      thumbmarker('x');
    },
});
slider.start();

function slideto(x) {
  slider.gotoSlide(x);
  thumbmarker(x);
}
