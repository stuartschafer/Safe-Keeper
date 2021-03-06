$(function() { 
    // GET request to get current user info and display name
  $.get("/api/user_data").then(function(data) {
      $(".showName").text(data.name + "\'s");
    });

  //event listeners to route user to corresponding page
  $("#invButton").click(function () {
    location.href = "/inventory";
  });

  $("#addButton").click (function () {
    location.href = "/add";
  });
});

var shine = new Shine(document.getElementById('landingPageHeader'));
var shine1 = new Shine(document.getElementById('logoshadow'));
var shine2 = new Shine(document.getElementById('shinename'));
var shine3 = new Shine(document.getElementById('invButton'));
var shine4 = new Shine(document.getElementById('addButton'));

var config = new shinejs.Config({
  numSteps: 10,
  opacity: 0.5,
  offset: 0.5,
  offsetPow: 2,
  shadowRGB: new shinejs.Color(240, 173, 78)
});

var config2 = new shinejs.Config({
  numSteps: 10,
  opacity: 0.5,
  offset: 0.5,
  offsetPow: 2,
  shadowRGB: new shinejs.Color(119, 136, 153)
});

var config3 = new shinejs.Config({
  numSteps: 10,
  opacity: 0.5,
  offset: 0.5,
  offsetPow: 2,
  shadowRGB: new shinejs.Color(0, 0, 255)
});

window.addEventListener('mousemove', function(event) {
  shine1.light.position.x = event.clientX * 1.5;
  shine1.light.position.y = event.clientY * 1.5;
  shine1.config = config;
  shine1.draw();

  shine2.light.position.x = event.clientX * 1.5;
  shine2.light.position.y = event.clientY * 1.5;
  shine2.config = config2;
  shine2.draw();

  shine3.light.position.x = event.clientX * 1.5;
  shine3.light.position.y = event.clientY * 1.5;
  shine3.config = config3;
  shine3.draw();

  shine4.light.position.x = event.clientX * 1.5;
  shine4.light.position.y = event.clientY * 1.5;
  shine4.config = config3;
  shine4.draw();

  shine.light.position.x = event.clientX * 1.5;
  shine.light.position.y = event.clientY * 1.5;
  shine.config = config;
  shine.draw();
}, false);