const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Bruce, BruceImage
var thunder, thunderImage
var rain

function preload(){
BruceImage = loadImage("images/Walking Frame/walking_1.png")
thunderImage = loadImage("images/thunderbolt/3.png")
    
}

function setup(){
 createCanvas(400,700);
 Bruce = createSprite(200,530,50,50);
 Bruce.addImage("walking_1", BruceImage);
 Bruce.scale = 0.5
 thunder = createSprite(200,50,50,50);
 thunder.addImage("3",thunderImage);
 thunder.scale = 0.5
 drops = new Drops(200,50,50);
 dropBod = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
 World.add(world, dropBody);  
}

function draw(){
    background("black")
    rain.display();
    drops.x= dropBody.position.x 
    drops.y= dropBody.position.y
    if(this.rain.position.y > height){
        
        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
    } 
    drawSprites();
    
}   

