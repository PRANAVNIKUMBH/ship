//Global variables
var shipani,seaing,ship,sea 

function preload(){
shipani=loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png')
seaimg=loadImage('sea.png')  
}

function setup(){
  createCanvas(500,500);

  sea=createSprite(100,400)
  sea.addImage(seaimg)
  sea.scale=0.3
  
  ship=createSprite(200,350,250,300)
  ship.addAnimation('walking',shipani)
  ship.scale=0.3
  
}

function draw() {
  background('light blue');
  
  
  

  sea.velocityX=5
  if(sea.x < 0){
  sea.x = 300  
  }
  


 drawSprites()
}