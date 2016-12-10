
var canvas;
var context;
var images = {};
var totalResources = 6;
var numResourcesLoaded = 0;
var fps = 30;

var maxEyeHeight = 9;
var curEyeHeight = maxEyeHeight;
var eyeOpenTime = 0;
var timeBtwBlinks = 4000;
var blinkUpdateTime = 200;
var blinkTimer = setInterval(updateBlink, blinkUpdateTime);
// var fpsInterval = setInterval(updateFPS, 1000);
var numFramesDrawn = 0;
var curFPS = 0;

function prepareCanvas(canvasDiv, canvasWidth, canvasHeight)
{
    // Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
    canvas = document.createElement('canvas');
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    canvas.setAttribute('id', 'canvas');
    canvasDiv.appendChild(canvas);

    if(typeof G_vmlCanvasManager != 'undefined') {
        canvas = G_vmlCanvasManager.initElement(canvas);
    }
    context = canvas.getContext("2d"); // Grab the 2d canvas context
    // Note: The above code is a workaround for IE 8and lower. Otherwise we could have used:
    //     context = document.getElementById('canvas').getContext("2d");

    loadImage("usabg");
    loadImage("legs");
    loadImage("torso");
    loadImage("rightArm");
    loadImage("head");
    loadImage("hair");
}

function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() {
      resourceLoaded();
  }
  images[name].src = "assets/" + name + ".png";
}

function resourceLoaded() {

  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {

    setInterval(redraw, 1000 / fps);
  }
}

function redraw() {

  canvas.width = canvas.width; // clears the canvas

  context.drawImage(images["usabg"], 0, 0, 699, 358);
    drawEllipse(516, 286, 6, curEyeHeight); // Left Eye Bison
    drawEllipse(551, 286, 6, curEyeHeight); // Right Eye Bison
}

function drawEllipse(centerX, centerY, width, height) {

  context.beginPath();

  context.moveTo(centerX, centerY - height/2);

  context.bezierCurveTo(
    centerX + width/2, centerY - height/2,
    centerX + width/2, centerY + height/2,
    centerX, centerY + height/2);

  context.bezierCurveTo(
    centerX - width/2, centerY + height/2,
    centerX - width/2, centerY - height/2,
    centerX, centerY - height/2);

  context.fillStyle = "black";
  context.fill();
  context.closePath();
}

function updateBlink() {

  eyeOpenTime += blinkUpdateTime;

  if(eyeOpenTime >= timeBtwBlinks){
    blink();
  }
}

function blink() {

  curEyeHeight -= 1;
  if (curEyeHeight <= 0) {
    eyeOpenTime = 0;
    curEyeHeight = maxEyeHeight;
  } else {
    setTimeout(blink, 10);
  }
}
