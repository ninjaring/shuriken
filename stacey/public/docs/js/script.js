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
      console.log('onInit');
    },
    onStart: function(){
      console.log('onStart');
    },
    onStop: function(){
      console.log('onStop');
    },
    onDestroy: function(){
      console.log('onDestroy');
    },
    beforeChange: function(){
      console.log('beforeChange');
    },
    afterChange: function(){
      console.log('afterChange');
    },
});
slider.addThumbNav();
slider.start();
