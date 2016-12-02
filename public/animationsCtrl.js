document.getElementById('canvas').getContext("2d").fillStyle = "transparent";
var particles = [];
function randomFloat (min, max)
	{
		return min + Math.random()*(max-min);
	}
function Particle ()
{
  this.scale = 1.0;
  this.x = 0;
  this.y = 0;
  this.radius = 20;
  this.color = "#000";
  this.velocityX = 0;
  this.velocityY = 0;
  this.scaleSpeed = 0.5;

  this.update = function(ms)
  {
    // shrinking
    this.scale -= this.scaleSpeed * ms / 1000.0;

    if (this.scale <= 0)
    {
      this.scale = 0;
    }

    // moving away from explosion center
    this.x += this.velocityX * ms/1000.0;
    this.y += this.velocityY * ms/1000.0;
  };

  this.draw = function(context2D)
  {
    // translating the 2D context to the particle coordinates
    context2D.save();
    context2D.translate(this.x, this.y);
    context2D.scale(this.scale, this.scale);

    // drawing a filled circle in the particle's local space
    context2D.beginPath();
    context2D.arc(0, 0, this.radius, 0, Math.PI*2, true);
    context2D.closePath();

    context2D.fillStyle = this.color;
    context2D.fill();

    context2D.restore();
  };
}

function createExplosion(x, y, color)
{
  var minSize = 2;
  var maxSize = 5;
  var count = 10;
  var minSpeed = 60.0;
  var maxSpeed = 200.0;
  var minScaleSpeed = 1.0;
  var maxScaleSpeed = 4.0;


  for (var angle=0; angle<360; angle += Math.round(360/count))
  {
    var particle = new Particle();



    particle.x = x;
    particle.y = y;


    particle.radius = randomFloat(minSize, maxSize);

    particle.color = color;

    particle.scaleSpeed = randomFloat(minScaleSpeed, maxScaleSpeed);

    var speed = randomFloat(minSpeed, maxSpeed);

    particle.velocityX = speed * Math.cos(angle * Math.PI / 180.0);
    particle.velocityY = speed * Math.sin(angle * Math.PI / 180.0);
    particles.push(particle);
  }
}

function update (frameDelay)
{


  document.getElementById('canvas').getContext("2d").clearRect(0, 0, document.getElementById('canvas').getContext("2d").canvas.width, document.getElementById('canvas').getContext("2d").canvas.height);

  // update and draw particles
  for (var i=0; i<particles.length; i++)
  {
    var particle = particles[i];

    particle.update(frameDelay);
    particle.draw(context2D);
  }
}


window.addEventListener("load", function()
{
  // canvas and 2D context initialization
  canvas = document.getElementById("canvas");
  context2D = canvas.getContext("2d");

  // Click : BOOM !
  this.addEventListener("click", function(e)
  {
		console.log(e.x)
		console.log(e.y)

		var canvasTop = context2D.canvas.offsetTop
		var canvasLeft = context2D.canvas.offsetLeft

    var x = (e.x - canvasLeft)/2.15;
    var y = (e.y - canvasTop)/2.05;

    createExplosion(x, y, "#f20a0a");

    createExplosion(x, y, "#ffffff");

    createExplosion(x, y, "#2400ff");
  });


  var frameRate = 60.0;
  var frameDelay = 1000.0/frameRate;

  setInterval(function()
  {
    update(frameDelay);

  }, frameDelay);
});


$('body').append('<canvas id="canvas"></canvas>');
