
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stoneobj;
var constrainedHand;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneobj=new Stone(100,200,50,50)
	mango1=new mango(1100,100,30);
	mango2=new mango(1000,150,30);
	mango3=new mango(1200,200,30);
	mango4=new mango(1250,210,30);
	mango5=new mango(1175,220,30);
	mango6=new mango(1120,170,30);
	mango7=new mango(935,180,30);
	mango8=new mango(1037,190,30);
	mango9=new mango(1046,125,30);
    treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	var options ={
	bodyA:stoneObj.body,
	bodyB:constrainedHand.body,
	stiffness:0.04,
	length:10
	}
	var chain = Constraint.create(options);
	World.add(world.chain);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  groundObject.display();
  stoneobj.display();
  constrainedHand.display();
  strokeWeight(3);
  line(stoneObj.body,position.x.stoneObj.body.position.y,constrainedHand.body.position.x.constrainedHand.body.position.y);
}
