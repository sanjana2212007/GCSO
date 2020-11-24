var car,speed,wall,weight


function setup() {
  createCanvas(1200,400);
 car= createSprite(50, 200, 50, 50);
 wall= createSprite(1100, 200, 60, 200);
 speed=random(55,90)
 weight=random(400,1500)
 car.velocityX=speed
}

function draw() {
  background(0); 
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    var deformation=0.5*speed*speed*weight/22500
    if(deformation>180){
      car.shapeColor="red"
    }
    if(deformation<180&deformation>100){
      car.shapeColor="orange"
    }
    if(deformation<100){
      car.shapeColor="green"
    }
  } 
  drawSprites();
}