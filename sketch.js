const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;

var engine,world;
var house;
var ball
var balls=[]
//var balls2=[]
var bg
//var backGroundImg
function preload (){
//backGround()
bg=loadImage("snow2.jpg")
}

function setup() {
 var canvas= createCanvas(1200,600);
  canvas .position(100,100)
  engine=Engine.create();
  world=engine.world

 // backGround()

}

function draw() {
  //if(backGroundImg)
  background(bg)  
  Engine.update(engine);

  if(frameCount%1===0){
         balls.push(new Ball(random(width/1-1200,width/1+1200),40,40))

  }
  for(var j=0;j< balls.length;j++){
  balls[j].display();
  }
// if(hour>=12)
// {
//   textSize(30)
//   strokeWeight(30)
//   stroke("red")
//    text("Time : "+ hour%12 + " PM", 600,100); 
// }
// else if(hour==0)
// {
//   textSize(30)
//   strokeWeight(30)
//   stroke("orange")
//  text("Time : 12 AM",600,100); 
// }
// else
// {
//   textSize(30)
//   strokeWeight(30)
//   stroke("green")
//  text("Time : "+ hour%12 + " AM", 600,100);
// }


// if(hour>=12)
// {
//   if(frameCount%1===0){
//     balls.push(new Ball(random(width/1-1200,width/1+1200),40,40))
//   }
//   for (var j = 0; j < balls.length; j++) {
//     balls[j].display();
// }
// }
// else 
// {
//   if(frameCount%1===0){
//     balls2.push(new Ball2(random(width/1-1200,width/1+1200),40,40))
//   }
//   for (var j = 0; j < balls2.length; j++) {
//     balls2[j].display();
// }
// }

//  drawSprites()
  
 
// }
// async function backGround(){
//   var respon=await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata");
//   var responJSON=await respon.json();
//   var day=responJSON.datetime;
  
  
  
//   hour=day.slice(11,13)
  
//   console.log(hour)

//   if(hour>=12&&hour<=24){
// bg="snow2.jpg"
//   }
//   else{
//     bg="land.jpg"
//   }
//   backGroundImg=loadImage(bg)
 }