var x = 35;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); 
	  
}


function draw() {
   //background color
  background(0,72,72); 

  
  //draw door
  stroke(54,54,54); 
  fill(96,96,96);  
  strokeWeight(10);
  rect(175,250,120,250);

  //draw doorknob
  fill(128,128,0);
  ellipse(283,375, 35, 35); 
  
if (mouseIsPressed) {            
    
    background(0, 72 - x, 72 - x);   // darken background
    fill(0,0,0);
	rect(175,250,120,250);           // add darker rectangle over first rectangle to create the illusion of opening door into gaping mouth

	fill(255,255,204);               //color eyes
	ellipse(180, 80, 80, 80);        // left eye

	ellipse(300, 80, 80, 80);        // right eye
    


}
      
  


}

  

  


 
   




