var PLAY=1;
var END=0;
var gameState=1;
var score=0;
var fruitGroup
var enemyGroup
var sword,swordImage;
var fruit1,fruitImage1;
var fruitImage2;
var fruitImage3;
var fruitImage4;
var alien1,alienImage1;
var alien2,alienImage2;
var gameoverImage;
var gameoverSound;
var swooshSound;

function preload(){
swordImage = loadImage("sword.png")
fruitImage1=loadImage("fruit1.png")
fruitImage2=loadImage("fruit2.png")
fruitImage3=loadImage("fruit3.png")
fruitImage4=loadImage("fruit4.png")
alienImage1=loadImage("alien1.png")
alienImage2=loadImage("alien2.png")
gameoverImage=loadImage("gameover.png");
swooshSound=loadSound("knifeSwooshSound.mp3");
gameoverSound=loadSound("gameover.mp3")
}

function setup(){
  createCanvas(600,600);
  sword = createSprite(350,150,20,20);
  sword.addImage("sword",swordImage);
  sword.scale=0.8;
  fruitGroup=createGroup();
  enemyGroup=createGroup();
}


function draw(){
background("lightgreen")
  //if (gameState=="play"){
    sword.x= World.mouseX
    sword.y= World.mouseY
//}
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach()
    swooshSound.play();
    score=score+2
  }
  if(sword.isTouching(enemyGroup)){
   // gameState = END;
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
    sword.addImage(gameoverImage);
    sword.x=200;
    sword.y=200;
    gameoverSound.play();
  }
populateFruits();
populateEnemy();
  if(score>4){
  fruitGroup.setVelocityXEach(-9);
}
  if(score>10){
    enemyGroup.setVelocityXEach(-15);
  }
drawSprites();

text("Score: "+ score,500,30);
}

function populateFruits(){
if(frameCount%120==0){
i=random(200,500)
fruit = createSprite(570,i,20,20);
fruit.scale=0.3;
fruit.velocityX=-2;
var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruitImage1);
              break;
      case 2: fruit.addImage(fruitImage2);
              break;
      case 3: fruit.addImage(fruitImage3);
              break;
      case 4: fruit.addImage(fruitImage4);
              break;
    }

fruitGroup.add(fruit);
}
}
function populateEnemy(){
  if(frameCount%80==0){
e= random(150,550)
enemy=createSprite(500,e,10,10)
enemy.velocityX=-4
var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: enemy.addImage(alienImage1);
              break;
      case 2: enemy.addImage(alienImage2);
              break;
}
enemyGroup.add(enemy);
}
}
