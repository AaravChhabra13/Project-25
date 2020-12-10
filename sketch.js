
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(1600,800);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ground=new GROUND(800,780,1600,10);

	dustbin=new Dustbin();

	ball=new Ball(100,700,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  dustbin.display();
  ball.display();

  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:300,y:-310});
	}
}



