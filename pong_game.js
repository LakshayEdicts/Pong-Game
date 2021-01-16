// merge the code its better than yours
// its my fake id i will contact you with my another id okay
var xBall = Math.floor(Math.random () *300) +50;
var yBall = 50;
var xSpeed = (2,7);
var ySpeed = (-2,-7);
var Score = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#00D6FF');
  fill('#0092ff');
  rect(mouseX, 375, 90,15 );
  move();
  display();
  bounce();
  paddle();
  // writing a code for displaying the Score
  fill ('#FF0004');
  textSize(25);
  text("Score :" + Score , 10, 25);
}
//for the movement of ball and paddle
function move() {
  xBall += xSpeed;
  yBall += ySpeed;
}
// for bouncing the ball
function bounce(){
  if(xBall < 10 ||
    xBall > 400-10) {
    xSpeed *= -1;
  }
  if (yBall < 10 ||
     yBall > 400 - 10){
    ySpeed *= -1;
  }
}

// function is for displaying ball
function display() {
fill ('#F4FF00');
ellipse (xBall , yBall, 20, 20)
}

// function for paddle 
function paddle() {
  if ((xBall > mouseX &&
       xBall < mouseX +90) &&
      (yBall +10 >= 375)) {
    xSpeed *= -1;
    ySpeed *= -1;
    Score++;
  }   
}
function time(){
   var hour=hours();
  var min=minutes();
  text(`TIME : ${hour} : ${min}`,width/3,40);
}

