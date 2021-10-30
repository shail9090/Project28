
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  img = loadImage('boy.png');
  img1= loadImage('stone.png');
   mangoImage = loadImage('mango.png');
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
  mango1 = new mango(350,400,10);
}

 

function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  drawSprites();
  image(img,0,0,250,400);
  image(img1,35,95,25,25)

 //   image(mangoImage,10,10,100,100)

}



