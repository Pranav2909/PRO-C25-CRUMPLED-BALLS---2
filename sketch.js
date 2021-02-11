
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1;
var ball;

function preload(){
	
}

function setup() {
	createCanvas(1250, 300);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(100,height,12500,20);
	rect1 = new Bucket(1230,25,20,100);
	rect2 = new Bucket(1170,75,150,20);
	rect3 = new Bucket(1110,25,20,100);
	ball = new Paper(100,25,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  ball.display();
}