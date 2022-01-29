var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudeImage
var cactus,cactus1,cactus2,cactus3,cactus4,cactus5,cactus6





function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudeImage = loadImage('cloud.png')
  cactus2=loadImage('obstacle2.png')
  cactus3=loadImage('obstacle3.png')
  cactus4=loadImage('obstacle4.png')
  cactus5=loadImage('obstacle5.png')
  cactus6=loadImage('obstacle6.png')

  cactus1=loadImage('obstacle1.png')
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //set background color
  background(rgb(164,172,173));
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
spawnClouds(); 
  spawnCacti();
  drawSprites();
  
}
function spawnClouds (){
  if(frameCount%60===0){
    cloud=createSprite(600,40,40,10);
    cloud.velocityX=-4;
    cloud.addImage(cloudeImage)
    cloud.scale=0.5 
    cloud.y=Math.round(random(20,60))
    cloud.depth=trex.depth
    trex.depth=trex.depth+1
  }

}

function spawnCacti(){
  if(frameCount%60===0){
    cactus=createSprite(600,179,10,30)
    cactus.velocityX=-6
    var Num =Math.round(random(1,6))
    switch(Num){
      case 1 : cactus.addImage(cactus1)
      break;
      case 2 : cactus.addImage(cactus2)
      break;
      case 3 : cactus.addImage(cactus3)
      break;
      case 4 : cactus.addImage(cactus4)
      break;    
      case 5 : cactus.addImage(cactus5)
      break;
      case 6 : cactus.addImage(cactus6)
      break;
      default:break;

  }
  cactus.scale=0.6
  }
}
