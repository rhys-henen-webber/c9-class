var block
function setup() {
  createCanvas(400,400);
  block = createSprite(200, 200, 40, 40)
}

function draw() 
{
  background(30);
  if (keyIsDown(UP_ARROW)){
    block.y = block.y - 4
  }
  if (keyIsDown(DOWN_ARROW)){
    block.y = block.y + 4
  }if (keyIsDown(LEFT_ARROW)){
    block.x = block.x - 4
  }if (keyIsDown(RIGHT_ARROW)){
    block.x = block.x + 4
  }
drawSprites()
}




