var mouse,mouseImg;
var cat,catImg;
var garden,gardenImg;
function preload() {
    //load the images here
mouseImg=loadImage("mouse1.png","mous2.png","mouse3.png","mouse4.png");
catImg=loadImage("cat1.png","cat2.png","cat3.png","cat4.png");
gardenImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(800,500,10,45);
cat.addAnimation(catImg);

mouse=createSprite(200,700,20,50);
mouse.addAnimation(mouseImg);
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide


    keyPressed();
    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if(keycode===LEFT_ARROW){
    cat.velocityx=-5;
    cat.addAnimation("catrunning",catImg2);
    cat.changeAnimation("catrunning");
}

}
