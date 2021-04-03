
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1 = createSprite(200,200,60,60);
  gameObject1.shapeColor = "pink";

  gameObject2 = createSprite(300,300,60,60);
  gameObject2.shapeColor = "red";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 
  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "orange";
  }

  else {
    movingRect.shapeColor = "green";
  
    gameObject1.shapeColor = "pink";
  }
  
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "purple";
  }

  else {
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "red";
  }
//bounceOff(movingRect,fixedRect)
  drawSprites();
}




