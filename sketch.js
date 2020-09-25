
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobdia,bobY;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	roof = new Roof(width/2,height/4,width/4,20);
	
	bobdia = 40;
    bobY = height/4+300
	bob1 = new Bob(400-bobdia*2,bobY,bobdia);
	bob2 = new Bob(400-bobdia,bobY,bobdia);
	bob3 = new Bob(400,bobY,bobdia);
	bob4 = new Bob(400+bobdia,bobY,bobdia);
	bob5 = new Bob(400+bobdia*2,bobY,bobdia);

	rope1 = new Rope(bob1.body,roof.body,-bobdia*2, 0);
	rope2 = new Rope(bob2.body,roof.body,-bobdia, 0);
	rope3 = new Rope(bob3.body,roof.body,0, 0)
	rope4 = new Rope(bob4.body,roof.body,+bobdia, 0)
	rope5 = new Rope(bob5.body,roof.body,+bobdia*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 // Engine.update(engine);
  
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

  roof.display();

}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}






