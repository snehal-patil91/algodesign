var fixedRect,movingRect;
var gameObject1, gameObject2;
var object1,object2;
function setup() 
{
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 100);
  movingRect = createSprite(200, 200, 100, 100);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(50, 300, 50, 50);
  gameObject2 = createSprite(200, 300, 50, 50);
  gameObject1.shapeColor = "blue";
  gameObject2.shapeColor = "blue";
}

function draw() 
{
  background(0);  

  movingRect.x= mouseX;
  movingRect.y= mouseY;

  if(isTouching(gameObject2,movingRect))
  {
   gameObject2.shapeColor = "red";
  movingRect.shapeColor = "red";
  }
else
{
  gameObject2.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}
  drawSprites();
}

function isTouching(object1,object2)
{
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2)
  {
    return true;
  }
  else
  {
    return false;
  }
}