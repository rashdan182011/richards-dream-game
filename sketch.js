var bgImg
var catImg;
function preload() {
    //load the images here
    bgImg = loadImage("add image url here");
    catimg1= loadAnimation("images/cat1.png");
    mouseimg1= loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation ("add cat2 and cat3 image url here.");
    mouseimg2 = loadAnimation ("add mouse2 and mouse3 image url here")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background["add image variable name here"]
    //Write condition here to evalute if tom and jerry collide
if(catImg.x - mouse.x < (cat.width)/2){
    
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouseTeasing" , mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }

if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseimg2)
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay= 25;
}
}
