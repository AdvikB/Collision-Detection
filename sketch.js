var fixRect, movingRect


function setup() {
  createCanvas(800,400);
  fixRect = createSprite(400, 200, 50, 50);
  fixRect.shapeColor = "blue";
  movingRect = createSprite(500,200,50,80);
  movingRect.shapeColor = "blue";
}

function draw() {
  background(0); 
   console.log("diff :" + (fixRect.x-movingRect.x));
   console.log(movingRect.width/2+fixRect.width/2);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x-fixRect.x < movingRect.width/2+fixRect.width/2 &&
    fixRect.x-movingRect.x<movingRect.width/2+fixRect.width/2 && 
    fixRect.y-movingRect.y<movingRect.height/2+fixRect.height/2 &&
    movingRect.y-fixRect.y < movingRect.height/2+fixRect.height/2){ 
    fixRect.shapeColor = "red";
    movingRect.shapeColor = "red";
}
else{
  fixRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}
  
  drawSprites();
  fill("white");
  text(mouseX+","+mouseY,mouseX,mouseY);
}