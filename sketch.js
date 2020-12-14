const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 

var engine, world; 
var ground; 
var box1;
var box2;

function setup() { 
  createCanvas(800,400); 
  engine = Engine.create(); 
  ///my engine's world 
  world = engine.world; 
 box1=new Box(230,200,50,50);
 box2=new Box(200,300,60,70);
 ground=new Ground(400,380,800,30);
} 
function draw() { 
  background("black"); 
  Engine.update(engine); 
  box1.display();
  box2.display();
  ground.display();
  }
