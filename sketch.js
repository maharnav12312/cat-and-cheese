var mouse,mouseCheese,mouseDance,mouseCollide;
var cat,catSit;catWalk,catCollide;
var bgImg;





function preload() {
    
  mouseCheese = loadImage("images/mouse1.png");
  mouseDance = loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseCollide = loadImage("images/mouse4.png",);

  catSit = loadImage("cat1.png");
  catWalk = loadAnimation("cat2.png","cat3.png");
  catCollide = loadImage("cat4.png");

  bgImg = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1400,700);

    mouse = createSprite(100,420,20,20);
    mouse.addAnimation("mouse1",mouseCheese);
    mouse.scale = 0.1;

    cat = createSprite(580,420,20,20);
    cat.addAnimation("cat1",catSit);
    cat.scale = 0.16;

}

function draw() {

    background(bgImg);
 
    if(cat.x - mouse.x < (cat.width/2 - mouse.width/2)+20
      ){
        mouse.changeAnimation("mouse4",mouseCollide);
        cat.velocityX = 0;
        cat.changeAnimation("cat4",catCollide);
    }

    keyPressed();

    drawSprites();

}


function keyPressed(){

  if(keyDown("left")) {
    cat.velocityX = -3;
    cat.changeAnimation("cat2,cat3",catWalk);
    mouse.changeAnimation("mouse2,mouse3",mouseDance);
    mouse.frameDelay = 25;
  }

}
