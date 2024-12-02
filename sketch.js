var polo=0;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
    background(random(0,255),15,random(0,255)); //an RGB color for the canvas' background
  //circle
}

//The draw function happens over and over again
function draw() {
  
  strokeWeight(3);
  stroke(210,250,111); // an RGB color for the circle's border
  fill(111,222,111,222); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),polo,20); // center of canvas, 20px dia
  fill(134,random(0,255),15,137);
  ellipse(mouseX,polo,20,20);
  textFont("Helvetica");
  textSize(100);
  text('Tiana',150,275);
  strokeWeight(0);
  ellipse(mouseX,mouseY,100,mouseX)
}

function mousePressed(){
  if(polo>=255){
    polo=0;
  }else{
    polo=polo+2;

  }

}