var PLAY = 1;
var END = 0;
var tower,towerImage
var door,doorImage
var climber,climberImage
var ghost,ghostImage
var invisibleBlock
var doorGroup,climberGroup,ibGroup
var gameState=PLAY;

function preload(){
ghostImage=loadImage("ghost-standing.png");
doorImage=loadImage("door.png");
climberImage=loadImage("climber.png");
towerImage=loadImage("tower.png");
  
}

function setup(){
createCanvas(600,600);

 tower=createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY=1;
 
  ghost=createSprite(200,200,50,50);
  ghost.addImage(ghostImage);
  ghost.scale=0.3;
  
  
  doorGroup=new Group();
  climberGroup=new Group();
   ibGroup=new Group();
}

function draw(){
background("black");

  if(gameState===PLAY){
    if(tower.y>400){
  tower.y=300;
}


  if(keyDown("left")){
    ghost.x=ghost.x-3;
  }
 
   if(keyDown("right")){
    ghost.x=ghost.x+3;
  }
  
   if(keyDown("space")){
    ghost.velocityY=-5;
    
  }
  ghost.velocityY=ghost.velocityY + 0.8;
  
 spawnDoor(); 

    if(climberGroup.isTouching(ghost)){
      ghost.destroy();
      gameState=END
      
    }
    
   /*if(ibGroup.isTouching(ghost)){
      ghost.destroy();
       gameState=END;
       
    }*/
  }
  
  else if(gameState===END){
    textSize(30);
    text("gameOver",230,250);
    tower.destroy();
    door.destroy();
    climber.destroy();
  }

drawSprites();
}

function spawnDoor(){
  if(frameCount%240===0){
    door=createSprite(200,0);
    door.addImage(doorImage);
    door.velocityY=1;
    door.x=Math.round(random(120,400))
    door.Lifetime=800;
    
    climber=createSprite(200,100);
    climber.addImage(climberImage);
    climber.velocityY=1;
    climber.lifetime=800;
    climber.x=door.x;
    
    invisibleBlock=createSprite(200,65);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    invisibleBlock.velocityY=1;
    invisibleBlock.x=door.x;
    invisibleBlock.visible=false;
    
    ibGroup.add(invisibleBlock);
    doorGroup.add(door);
    climberGroup.add(climber);
    
    ghost.depth=door.depth;
    ghost.depth++;
  }
    
}













