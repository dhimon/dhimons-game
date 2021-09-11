var backgroundImage
var character_running
var clockImage
var coinImage
var monsterImage

function preload(){
backgroundImage = loadImage("assets/background.gif")
clockImage = loadImage("assets/clock.png")
coinImage = loadImage("assets/coin.png")
monsterImage = loadImage("assets/monster.png")
character_running = loadAnimation("assets/character1.png","assets/character2.png",
"assets/character3.png", "assets/character4.png","assets/character5.png", "assets/character6.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundSprite = createSprite(width/2,height/2);
  backgroundSprite.scale = 2
  backgroundSprite.addImage(backgroundImage);


  character = createSprite(100, height-100, 50 , 100);
  character.addAnimation("running", character_running);
  character.scale = 0.25;

  invisibleGround = createSprite(width/2,height-50,width,50);
  invisibleGround.shapeColor = "white";
  
}

function draw() {
  background("white");

  backgroundSprite.velocityX = -4;

  console.log(backgroundSprite.x);

  if(backgroundSprite.x<600 ){
    backgroundSprite.x = backgroundSprite.width/2;
  }

  if(keyDown("space") && character.y > height/4){
    character.velocityY = -10
  }

  character.velocityY = character.velocityY +0.5;

  character.collide(invisibleGround);

  drawSprites();

}