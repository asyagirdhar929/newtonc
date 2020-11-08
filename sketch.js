
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5,roofobject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var bob1 = new Bob (200,300,50);
var bob2 = new Bob (200,350,50);
var bob3 = new Bob (200,400,50);
var bob4 = new Bob (200,450,50);
var bob5 = new Bob (200,500,50);
rope1=new Rope(bob1.body,roofobject.body,-bobDiameter*2,0);
rope2=new Rope(bob2.body,roofobject.body,-bobDiameter*2,0);
rope3=new Rope(bob3.body,roofobject.body,-bobDiameter*2,0);
rope4=new Rope(bob4.body,roofobject.body,-bobDiameter*2,0);
rope5=new Rope(bob5.body,roofobject.body,-bobDiameter*2,0);
roofobject=new roof(150,50,30,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
roofobject.display();
  drawSprites();
 
}
function keypressed()
 {
 if (keyCode === UP_ARROW)
 {
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:100, y:-100});
   Matter.Body.applyForce(bob2.body,bob2.body.position,{x:50, y:-50});
   Matter.Body.applyForce(bob3.body,bob3.body.position,{x:10, y:-10});
   Matter.Body.applyForce(bob4.body,bob4.body.position,{x:10, y:-10});
   Matter.Body.applyForce(bob5.body,bob5.body.position,{x:10, y:-10});
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:25, y:-25});
   Matter.Body.applyForce(bob2.body,bob2.body.position,{x:10, y:-10});
 }
 }



