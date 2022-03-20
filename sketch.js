//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;


var bird,pole,scene;
var birdImg,poleImg;


function preload() {
scene= loadImage ("backround.png");
birdImg= loadImage ("bird.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
  //  world = engine.world;

bird = createSprite(100,200,20,20);
bird= addImage(birdImg);
}


function draw(){
    background(scene);
    //Engine.update(engine);
    bird.display();
}










