var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var musicsound;

function preload(){
    musicsound = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(100,600,180,40);
    block1.shapeColor = "blue";
    block2 = createSprite(300,600,180,40);
    block2.shapeColor = "green";
    block3 = createSprite(500,600,180,40);
    block3.shapeColor = "red";
    block4 = createSprite(700,600,180,40);
    block4.shapeColor = "yellow";
    // creating a ball for the game
    ball = createSprite(random(20,750));
    ball.shapeColor = "white";
    
   

    //create box sprite and give velocity
    ball.velocityY = 4;

     

}

function draw() {
    background(rgb(169,169,169));
    
    createEdgeSprites();
    //ball.bounceOff(edges);
   //block1.bounceOff(edges);
   //block2.bounceOff(edges);
   //block3.bounceOff(edges);
   //block4.bounceOff(edges);
   
  
   // creating a code that the ball should be controlled by the user
   
   
    //addotion to check if box touching surface and make it box
 
    
  if (block1.isTouching(ball) && ball.bounceOff(block1)){
     // change the color of the block1
     ball.shapeColor = "blue";
     playsound("musicsound");
  }
   // need to stop the ball if the ball touches the block2
  if (block2.isTouching(ball) && ball.bounceOff(block2)){
     // change the color of the block1
     ball.shapeColor = "green";
     ball.velocityY = 0;
     //musicsound.stop();
  }
  
  if (block3.isTouching(ball) && ball.bounceOff(block3)){
    // change the color of the block1
   ball.shapeColor = "red"
   //playsound("musicsound");
 } 
 
 if (block4.isTouching(ball) && ball.bounceOff(block4)){
    // change the color of the block1
    ball.shapeColor = "yellow";
    //playsound("musicsound");
 }


drawSprites();


}
