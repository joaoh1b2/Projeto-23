
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle1 = 60;
var angle2 = 40;
var angle3 = 20;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

	var block_options={
       isStatic: true
	}
    
	var rotator_options={
		isStatic: true
	 }
	
  var ball_options={
    restitution:0.4,
    friction:0.02
  }
    
  fill("purple")
	plane = Bodies.rectangle(300,593,650,20,block_options);
  World.add(world,plane);
	block2 = Bodies.rectangle(500,400,160,20,block_options);
  World.add(world,block2); 
	block1 = Bodies.rectangle(100,400,160,20,block_options);
	World.add(world,block1); 

	rotator1 = Bodies.rectangle(300,200,150,20,rotator_options)
	World.add(world,rotator1)
	rotator2 = Bodies.rectangle(300,200,150,20,rotator_options)
	World.add(world,rotator2)
	rotator3 = Bodies.rectangle(300,200,150,20,rotator_options)
	World.add(world,rotator3)

  ball1 = Bodies.circle(150,10,10,ball_options)
  World.add(world,ball1)
  ball2 = Bodies.circle(225,10,10,ball_options)
  World.add(world,ball2)
  ball3 = Bodies.circle(300,10,10,ball_options)
  World.add(world,ball3)
  ball4 = Bodies.circle(375,10,10,ball_options)
  World.add(world,ball4)
  ball5 = Bodies.circle(450,10,10,ball_options)
  World.add(world,ball5)

	Engine.run(engine);
  
}


function draw() {
  background("blue");
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(block1.position.x,block1.position.y,160,20);
  rect(block2.position.x,block2.position.y,160,20);
  rect(plane.position.x,plane.position.y,650,20);

  ellipse(ball1.position.x,ball1.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball4.position.x,ball4.position.y,10);
  ellipse(ball5.position.x,ball5.position.y,10);
 

  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=7

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=5

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=3

  drawSprites();
}



