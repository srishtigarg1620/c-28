const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var backgroundImg
var towerImg
var angle 
var cannon


function preload(){
  backgroundImg = loadImage("assets/background.gif")
  towerImg = loadImage("assets/tower.png")



}



function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  angle = 270
  angleMode(DEGREES)

  tower = new Tower(150,350,160,310)
  cannon = new Cannon(180,110,110,50,angle)

  ground = Bodies.rectangle(200,600,1200,200)




  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  Engine.update(engine);
  image(backgroundImg,0,0,width,height)
  
  tower.display()
  cannon.display()

  
  

 
}


