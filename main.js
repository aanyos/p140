
var canvasSizeX = 600;
var canvasSizeY = 500;
var canvasPosX = screen.width/2 - canvasSizeX/2;
var canvasPosY = screen.height/2 - canvasSizeY/2;


function setup() {
  canvas = createCanvas(canvasSizeX, canvasSizeY);
  canvas.position(canvasPosX,canvasPosY);
  //canvas.center();
  video = createCapture(VIDEO);
  video.size(canvasSizeX,canvasSizeY);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded () {
  console.log('PoseNet Is Initialized');
}

function draw() {
  image(video, 0, 0, 600, 500);
  
}

function gotPoses()
{

}