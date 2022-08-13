function setup() {
  createCanvas(400,400);
  
}

function draw() {
 
  background("black");

  var square = createSprite(200,200,50,50);

  if(mousePressedOver(square)){
    background("blue")
  }

  drawSprites();
}
