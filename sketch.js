var fixedRect, movingRect,gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect=  createSprite(200, 400, 50, 80);
  fixedRect.shapeColor="green";

  movingRect= createSprite(400,200,80,50);
  movingRect.shapeColor="green";

  gameobject1=createSprite(100,200,40,80);
  gameobject1.shapeColor="green";

  gameobject2=createSprite(300,200,40,80);
  gameobject2.shapeColor="green";

  gameobject3=createSprite(500,200,40,80);
  gameobject3.shapeColor="green";
  gameobject3.velocityY=3;

  gameobject4=createSprite(700,200,40,80);
  gameobject4.shapeColor="green";
}

function draw() {
  background(0,0,0);  

  movingRect.x= mouseX;
  movingRect.y= mouseY;

  
  //console.log(fixedRect.x- movingRect.x);

if(isTouching(gameobject1,movingRect)){
  gameobject1.shapeColor="white";
movingRect.shapeColor="white";
}
 else{

  gameobject1.shapeColor="green";
movingRect.shapeColor="green";

 } 
 if(isTouching(gameobject2,movingRect)){
   gameobject2.velocityY=2;
   gameobject2.shapeColor="white";
 }
 bounceoff(gameobject3,movingRect);
  drawSprites();
  
}
