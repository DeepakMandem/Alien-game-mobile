var player
var END = 0;
var PLAY = 1;
var BADEND = 2;
var gameState = PLAY;
var shipimg;
var alienGroup;
var bulletGroup;
var alien;
var shipimg;
var alienimg;
var bossimg;

var score = 0;
var bossHealth = 1000;



function preload()
{
  shipimg = loadImage("ship.png")
  alienimg = loadImage("alien.png")
  bossimg = loadImage("UFO.png")
}

function setup() {
	createCanvas(1420, 680);
	player = createSprite(710,580,50,50);
  player.addImage(shipimg);
  player.scale = 0.3;

  alienGroup = new Group;
  bulletGroup = new Group;
  bossGroup = new Group;
	


	

	
  
}


function draw() {
  
  

  background("black")

  textSize(20)
  text("Score: "+ score, 100,50);
  
  
 
  player.x = World.mouseX;

  if (touches.length>0) {
    spawnBullets();
    touches = []; 
  }
  spawnAliens();

  if(alienGroup.isTouching(bulletGroup)){
    alien.lifetime=0;
    //alienGroup.destroyEach();
    bulletGroup.destroyEach();
    score++;
    
    //lien.visible=false;
  }

  if(bulletGroup.isTouching(bossGroup)){
    bossHealth = bossHealth - 1;
  }

  if(score > 499){
    
    textSize(20)
    text("Health: "+ bossHealth, 100,100);
    
    spawnBoss();
    
  }
  

  if(score === (10,20)){
    textSize(20)
    text("GREAT JOB!",710,340)
  }


  if(score === (100,110)){
    textSize(20)
    text("AWESOME!",710,340)
  }

  if(score ===200){
    textSize(20)
    text("WOW!",710,340)
  }
 
  if(score === 300){
    textSize(20)
    text("YOUR A NATURAL!",710,340)
  }

  if(score === 400){
    textSize(20)
    text("SUPER!",710,340)
  }
  

  if(score === 490){
    textSize(20)
    text("YOUR ALMOST ON THE BOSS BATTLE!",710,340)
  }
  
  if(bossHealth === 0){
    gameState = END;
  }
  
  if(gameState===END){
    alienGroup.setVelocityEach(0);
    alienGroup.visible = false;
    textSize(25)
    text("You Win! Refresh to play again!",680,400)

  }

  if(alienGroup.y > 680){
    gameState = BADEND;
  }

  if(gameState===BADEND){
    alienGroup.setVelocityEach(0);
    alienGroup.visible = false;
    textSize(25)
    text("You Lose. Refresh to play again!",680,400)

  }
  drawSprites();

  textSize(20);
  fill("white")
  text("GOAL OF THE GAME: defeat the aliens to get a high score and defeat the boss",355,140);
  text("Game Rules: 1.move your mouse to move  2.press space to shoot  3.if the aliens cross the border, then you lose!",355,60);
  text("4. you need 500 points to reach the boss",355,100)
  
 
  
 
}

function spawnAliens(){
  //write code here to spawn the clouds
if (frameCount % 60 === 0) {
   alien = createSprite(600,0,50,50);
  alien.x = Math.round(random(0,1420));
  alien.y = 0;
  count = Math.round( score + World.frameRate/10);

  alien.lifetime=600;
  alien.addImage(alienimg)
  alien.scale = 0.07;

  
  alien.velocityY = (2 + 10*count/100);
  alienGroup.add(alien);
  
   //assign lifetime to the variable
 
  
  //adjust the depth
  
  
  //add each cloud to the group
  
}

}

function spawnBullets(){
 
    var bullet = createSprite(200, 200,5,5);
    bullet.x=player.x;  
    bullet.y=player.y;
    bullet.velocityY=-10; 
    
    bullet.lifetime=100;

    bulletGroup.add(bullet);
    
    }



  function spawnBoss(){
    var boss = createSprite(710,200,200,150)
    boss.scale = 0.1;
    boss.addImage(bossimg)
    boss.velocityY=0.5;

    bossGroup.add(boss)

    
  
  }






