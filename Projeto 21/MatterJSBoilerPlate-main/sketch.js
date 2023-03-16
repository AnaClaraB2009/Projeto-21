
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball 

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);

	background ('black')

		//Create the Bodies Here.

	var ball_options = {
        isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 12
	}

	Bodies =  ball.Bodies.circle = (200,100,20,20, ball_options)
	World.add (world, ball)

	engine = Engine.create();
	world = engine.world;

	groundObj = new ground (width/2, 670, widht,20);
    leftSide = new ground (1100, 600, 20, 120)

	keyPressed ()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse (ball.position.x, ball.position.y, ball_options) 

  drawSprites();
 
}

function keyPressed () {
	if (keyCode === UP_ARROW){
		Body.applyForce (ball, ball.position.x, ball.position.y, 0.05)
	}
}


