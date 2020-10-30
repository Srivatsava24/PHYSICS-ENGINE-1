const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup(){
createCanvas(400,400)
engine = Engine.create();
world = engine.world;
var option = {
    isStatic:true
}
Ground = Bodies.rectangle(200,350,400,20,option);
World.add(world,Ground);

var option1 = {
    isStatic:true
}
Ground1 = Bodies.rectangle(200,50,400,20,option1);
World.add(world,Ground1);
var options = {
    restitution:1.5
}
Ball = Bodies.circle(200,100,20,options);

World.add(world,Ball);
}

function draw(){
background(0,0,0);
Engine.update(engine);
rectMode(CENTER)
rect(Ground.position.x,Ground.position.y,400,20);
rectMode(CENTER)
rect(Ground1.position.x,Ground1.position.y,400,20);
ellipseMode(RADIUS)
ellipse(Ball.position.x,Ball.position.y,20,20);


}