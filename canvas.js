var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2D');

//Rectangle

c.fillRect(100, 100, 100, 100);
console.log(canvas);

//Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.strokeStyle = "#fa34a3";
c.stroke();

//arc
for(var i=0; i<5; i++){
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.stroke();
}

var x = 200;
function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x, 200, 30, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();
  
  x += 1
}
