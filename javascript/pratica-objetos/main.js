// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const numberOfBalls = 25;
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function Shape(x, y, velX, velY, exists){
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = true;
};

function Ball(x, y, velX, velY, exists, color, size){
  Shape.call(this, x, y, velX, velY, exists);
  this.color = color;
  this.size = size;
};

/*Gambiarras para que Ball estebeleça a hernaça corretamente com Shape
  * Devemos refereniar o prototype de Shape para trazer suas propriedades para Ball
  * E devemos atualizar o construtor de Ball para que ele referencie Ball ao invez de Shape
*/
Ball.prototype = Object.create(Shape.prototype);
Object.defineProperty(Ball.prototype, "constructor", {
  value: Ball,
  enumerable: false,
  writable: true,
});


Ball.prototype.draw = function(){
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

Ball.prototype.update = function(){
  if(this.x + this.size >= width){
    this.velX = - this.velX;
  }

  if(this.x - this.size <= 0){
    this.velX = -this.velX;
  }

  if(this.y + this.size >= height){
    this.velY = - this.velY;
  }

  if(this.y - this.size <= 0){
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
    
};

Ball.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color =
          "rgb(" +
          random(0, 255) +
          "," +
          random(0, 255) +
          "," +
          random(0, 255) +
          ")";
      }
    }
  }
};

function EvilCircle(x, y, exists, color,size){
 Shape.call(this, x, y, 20, 20, exists);
  this.color = color;
  this.size = size;
};

EvilCircle.prototype = Object.create(Shape.prototype);
Object.defineProperty(EvilCircle.prototype, "constructor", {
  value: EvilCircle,
  enumerable: false,
  writable: true,
});

EvilCircle.prototype.draw = function (){
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.lineWidth = 3;
  ctx.stroke();
};

EvilCircle.prototype.checkBounds = function (){
  if(this.x + this.size >= width){
    this.x = - this.x;
  }

  if(this.x - this.size <= 0){
    this.x = -this.x;
  }

  if(this.y + this.size >= height){
    this.y = - this.x;
  }

  if(this.y - this.size <= 0){
    this.y = -this.y;
  }

};


EvilCircle.prototype.setControls = function (){
  let _this = this;
    window.onkeydown = function (e){
        if (e.keyCode === 65) {
    _this.x -= _this.velX;
  } else if (e.keyCode === 68) {
    _this.x += _this.velX;
  } else if (e.keyCode === 87) {
    _this.y -= _this.velY;
  } else if (e.keyCode === 83) {
    _this.y += _this.velY;
  }
  }
}


let counter = numberOfBalls;
EvilCircle.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (balls[j].exists) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
          balls[j].exists = false;
          counter--;
      }
    }
  }
};

let balls = [];
while (balls.length < numberOfBalls) {
  let size = random(10, 20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    true,
    "rgb(" +
      random(0, 255) +
      "," +
      random(0, 255) +
      "," +
      random(0, 255) +
      ")",
    size,
  );

  balls.push(ball);
}


let evilCircle = new EvilCircle(400, 400, true, "white", 20);
let labelCounter = document.querySelector("p");
evilCircle.setControls(); 
function loop() {
  
  labelCounter.innerText = `Contagem de bolas: ${counter}` 
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
   if(balls[i].exists){
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
   }
   evilCircle.draw();
   evilCircle.checkBounds();
   evilCircle.collisionDetect();

  }

  
  requestAnimationFrame(loop);
}

loop();

