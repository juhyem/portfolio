var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2D');

for(var i=0; i<5; i++){
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 0, Math.pi * 2, false);
  c.stroke();
}
