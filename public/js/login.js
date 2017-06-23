/////**********SHINE**********/////
var shine = new Shine(document.getElementById('landingPageHeader'));
var shine1 = new Shine(document.getElementById('logoshadow'));

var config = new shinejs.Config({
  numSteps: 20,
  opacity: 0.5,
  offset: 0.5,
  offsetPow: 2,
  shadowRGB: new shinejs.Color(240, 173, 78)
});

window.addEventListener('mousemove', function(event) {
  shine1.light.position.x = event.clientX * 1.5;
  shine1.light.position.y = event.clientY * 1.5;
  shine1.config = config;
  shine1.draw();

  shine.light.position.x = event.clientX * 1.5;
  shine.light.position.y = event.clientY * 1.5;
  shine.config = config;
  shine.draw();
}, false);