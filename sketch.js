var background, bgImg
var ground,invisibleground
var mago,magoImg,mago_walk

function preload(){

  bgImg = loadImage("./image/fundo.gif")

  magoImg = loadImage("./image/1_IDLE_000.png")

  mago_walkd1 = loadImage("./image/2_WALK_001.png")
  mago_walkd2 = loadImage("./image/2_WALK_002.png")
  mago_walkd3 = loadImage("./image/2_WALK_003.png")
  mago_walkd4 = loadImage("./image/2_WALK_004.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  
  mago = createSprite(70,350,50,50)
  mago.addImage(magoImg)
  mago.scale = 0.3

  mago.addAnimation("walkd",mago_walkd1,mago_walkd2,mago_walkd3,mago_walkd4)
 
}

function draw(){
  background("white");

  image(bgImg,0,0,width,height);

  if(keyDown("right")) {

  mago.velocityX =2 
  mago.changeAnimation("walkd")

  }

  if(keyDown("left")) {

    mago.velocityX =-2 
    mago.changeAnimation("walkd")
  
  }
  
  if(keyDown("up")) {

    mago.velocityY =-2 
    mago.changeAnimation("walkd")
    
  }

  if(keyDown("down")) {

    mago.velocityY =2 
    mago.changeAnimation("walkd")
      
  }
    
    


  drawSprites()

}
