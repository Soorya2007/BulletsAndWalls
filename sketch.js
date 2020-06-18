var bullet,wall,;
var speed,weight;
var thickness;

function setup() {
createCanvas(1600,400);
thickness = Math.round(random(22,83));

speed = Math.round(random(223,321));

weight =  Math.round(random(30,52));

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color(80,80,80)

bullet = createSprite(50,200,20,5);
bullet.shapeColor = color("white");
bullet.velocityX = speed;
}

function draw() {
  background("black"); 
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thiclness)

    if(damage>10)
    {
     wall.shapeColor = color(255,0,0);
    }
    if(damage<10)
    {
    wall.shapeColor = color(0,255,0);
    }
  } 
  drawSprites();
}

function hasCollided(bullet,wall)
{
var bulletrightedge = bullet.x + bullet.width;
var wallleftedge = wall.x;

if(bulletrightedge>=wallleftedge)
{
  return true;
}

return false;
}