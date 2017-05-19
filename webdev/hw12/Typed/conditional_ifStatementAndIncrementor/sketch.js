/* 
Example that reverses drawn shapes across the canvas/window using variables, incrementors and conditional logic (if else control structures) in the draw() loop.
Created by Dawn C. Hayes March 2017.
Typed by Luis Medina Triana
*/

var circX = 200; 
var circY = 200; 
var circStroke = 125; 
var circR = 55; 
var circG = 135; 
var circB = 225; 
var circSize = 75;
var recX = 100;
var recY = 300;
var recStroke = 35;
var recCol = 0;
var recSize = 75;
var canvBGR = 125;
var canvBGG = 55;
var canvBGB = 255; 
var speed = 2;



function setup() {  
	createCanvas(400, 400); 
}


function draw() {
	background(canvBGR, canvBGG, canvBGB); 
	stroke(circStroke); 
	fill(circR, circG, circB);  
	stroke(circStroke);  
	ellipse(circX, circY, circSize, circSize); 
	ellipse(circX + 50, circY - 75, circSize, circSize); 
	fill(circR, circG, circB, 135); 
	
	circX = circX + speed; 
					   
    stroke(recStroke);
    fill(recCol);
    rect(recX, recY, recSize, recSize);
    
    recY = recY - speed; 
    
    if(circX > width || circX < 0) { 
      
    	speed = speed *-1;			
    	
    } 					
}