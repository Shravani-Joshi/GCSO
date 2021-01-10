var car,wall;

var speed  , weight;

function setup() {
  createCanvas(1000,400);
 
  speed = random(65,100);
  weight = random(400,1000);

  car = createSprite(100,200,50,50);
  car.velocityX = speed;
  car.shapeColor = color("grey");

  wall = createSprite(800,200,60,height/2);
  wall.shapeColor = color("black");
}

function draw() {
  background("blue");
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
  
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation > 100){
      car.shapeColor =color(230,230,0);
    }
     
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}