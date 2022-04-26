const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var button 
var ground;
var left;
var right;
var top_wall;
var ball 
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options = {
    restitution:0.85
  }
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world ,  ball ) 
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 button=createImng("up.png")
 button.position(20,30)
 button.size(50,50)
 button.mouseClicked(hforce)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  
  background(51)
ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}
function hforce () {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05}) 

}
