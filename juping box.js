var canvas;
var music;
var box
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
blue=createSprite(100,585,175,25)
green=createSprite(300,585,175,25)
red=createSprite(500,585,175,25)
orange=createSprite(700,585,150,25)

    //create box sprite and give velocity
box=createSprite(random(20,750))
box.velocityY=5
red.shapeColor="red"
orange.shapeColor="orange"
green.shapeColor="green"
blue.shapeColor="blue"
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprites();
if(box .isTouching(red)){
    box.shapeColor="red"
    box.velocityY=0
}
if(box .isTouching(green)){
    box.shapeColor="green"
    box.velocityY=0}
if(box .isTouching(orange)){
        box.shapeColor="orange"
        box.velocityY=0
}
if(box .isTouching(blue)){
            box.shapeColor="blue"
            box.velocityY=0}
drawSprites();
}
