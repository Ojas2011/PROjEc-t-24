
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var part1, part2, part3;
var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 part1 = new bin(510,600,20,100);
	 part2 = new bin(690,600,20,100);
	 part3 = new bin(600,650,200,20);



	ball1 = new ball(200,250,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  part1.display();
  part2.display();
  part3.display();
  ball1.display();


  drawSprites();
 
}