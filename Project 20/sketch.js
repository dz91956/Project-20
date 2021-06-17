
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle = 60;
var angle2 = 20;
var particle1, particle2, particle3, particle4;
var plane;


function preload()
{
	
}

function setup() {
	createCanvas(500, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	var ball_options = {
		restitution:0.5, 
		friction_air:0.01
	  }

	particle1 = Bodies.circle(250, 20, 5, ball_options)
	World.add(world, particle1)
	particle2 = Bodies.circle(240, 15, 5, ball_options)
	World.add(world, particle2)
	particle3 = Bodies.circle(245, 10, 5, ball_options)
	World.add(world, particle3)
	particle4 = Bodies.circle(255, 25, 5, ball_options)
	World.add(world, particle4)


	var plane_options={
		isStatic: true
	}

	block1 = Bodies.rectangle(100,380,90,20, plane_options);
	block2 = Bodies.rectangle(380,380,90,20, plane_options);
	plane = Bodies.rectangle(250, 490, 500, 20, plane_options);

	World.add(world, block2);
	World.add(world, block1);
	World.add(world, plane)

	wedge = Bodies.rectangle(250, 200, 150, 20, plane_options)
 	World.add(world, wedge)
	wedge2 = Bodies.rectangle(250, 200, 20, 150, plane_options)
 	World.add(world, wedge2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);


  Body.rotate(wedge, angle)
  push();
  translate(wedge.position.x, wedge.position.y);
  rotate(angle);
  rect(0, 0, 180, 20)
  pop();
  angle += 4;

  Body.rotate(wedge2, angle)
  push();
  translate(wedge2.position.x, wedge2.position.y);
  rotate(angle2);
  rect(0, 0, 180, 20)
  pop();
  angle2 -= 3;
  
  rect(block1.position.x, block1.position.y, 90, 20);
  rect(block2.position.x, block2.position.y, 90, 20);
  rect(plane.position.x, plane.position.y, 500, 20);

  ellipse(particle1.position.x,  particle1.position.y, 15)
  ellipse(particle2.position.x,  particle2.position.y, 15)
  ellipse(particle3.position.x,  particle3.position.y, 15)
  ellipse(particle4.position.x,  particle4.position.y, 15)

  drawSprites();
 
  
}



