//Hi,I am Sumedha Roy;
//Today I made travelling in ship by the following steps;
//I would like to thank WhiteHat.jr for giving me this project;
//I would also like to thank my teacher;

//So lets get started:

//var images
var shipImage,ship_bobbing1,ship_bobbing2,edges;
var seaImage,sea;
var beaconImage,beacon;

//function preload
function preload(){
  
  //ship bobbing 1 
   ship_bobbing1=
  //loading the animation
loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  
  //ship bobbing 2
    ship_bobbing2=
  //loading the animation
loadAnimation("ship-3.png","ship-4.png","ship-3.png","ship-4.png");

  //loading the sea image
  seaImage = loadImage("sea.png");
  
}

//function setup
function setup(){
  //creating canvas
  createCanvas(400,400);
  
  edges = createEdgeSprites();
  
  //creating the sea sprite
  sea=createSprite(400,200);
  //adding the image
  sea.addImage("sea",seaImage);
  //scaling =0.25
  sea.scale=0.25;

  //creating the ship sprite
  ship=createSprite(150,200,15,15);
  //adding the image
  ship.addAnimation("movingship",ship_bobbing1);
  //scaling = 0.15
  ship.scale=0.15;
  
    


}

//function draw
function draw() {
  
  //giving the background colour blue
  background("blue");
  
  //velocityX for sea=-2.8
  sea.velocityX = -2.8;
  
  //if sea.X is lesser than 0
  if(sea.x<0){
  //sea.X = sea.width/8
   sea.x = sea.width/8; 
  }
  //drawSprites
   drawSprites();

}

//Now we have completed making the project;
//Hope you all will like it;
//Thank you;
//The end