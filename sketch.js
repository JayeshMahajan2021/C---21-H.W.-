var canvas;


function preload(){

    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 Box1 = createSprite(710,580,150,20);
 Box1.shapeColor = "red";
 
 Box2 = createSprite(550,580,150,20);
 Box2.shapeColor = "blue";

 Box3 = createSprite(390,580,150,20);
 Box3.shapeColor = "purple";

 Box4 = createSprite(230,580,150,20);
 Box4.shapeColor = "orange";

 Ball = createSprite(169,140,30,30);
 Ball.shapeColor = "black";
 Ball.velocityY = 6;
 Ball.velocityX = 6;


    

}

function draw() {
    background(rgb(169,169,169));
    
    edges = createEdgeSprites();
   
    

    
    //add condition to check if box touching surface and make it box
   if(Ball.isTouching(Box1) &&  Ball.bounceOff(Box1)) {
       Ball.shapeColor = "red";
       music.stop();
       

   }
   if(Ball.isTouching(Box3) &&  Ball.bounceOff(Box3)) {
    Ball.shapeColor = "purple";
    music.stop();
   

}
   
   if(Ball.isTouching(Box2) &&  Ball.bounceOff(Box2)) {
    Ball.shapeColor = "blue";
    music.play();
    

}

if(Ball.isTouching(Box4) &&  Ball.bounceOff(Box4)) {
    Ball.shapeColor = "yellow";
    music.play();
    Ball.velocityY = 0;
    Ball.velocityX = 0;
    

}
Ball.bounceOff(edges); 
Ball.bounceOff(Box1);
Ball.bounceOff(Box2);
Ball.bounceOff(Box3);
Ball.bounceOff(Box4);

drawSprites();
}
