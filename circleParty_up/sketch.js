var circle = { // this is the object with the name circle
  x: 100, // this is the x property in circle object
  y: 100,  // this is the y property in circle object
  speed: 5, // this is the speed property in circle object
  size: 50 // this is the size property in circle object
};
var colorlist = [245, 200, 223, 180]; // this is the array of colors
var randomsize = [50, 75 , 100, 125];


function setup() {
  createCanvas(600, 600);
  background(255,0,0); // this is the background
  var square = new Square(); // this creates a new square object
  square.display(); // call the display method from square
  square.move(); // call the move method from square 
  
  
}
function Square(){ // here we are setting up the function square to create objects in future
  this.x = 300; // here we are defining the values, which
  this.y = 300; // will be useful when we call a function with specific parameters
  
  this.display = function () { // now here we are adding another function in property
    stroke(24);  // here we are defining the property again in the function which
    strokeWeight(20); // which we created inside
    rect(this.x, this.y, 200, 200); // another function
  }
  
  this.move = function() {   // this is move property inside a function like above,
    this.x = this.x + random(-1, 1); // so it is basically a function, which
    this.y = this.y + random(-1, 1); // is inside another function value
}
  
  
}


function draw() {
  
  //changes color based on position of mouseX n mouseY
    if (mouseX < width/2 && mouseY < height/2 ) { // here we are changing the stroke
      strokeWeight(6); // and stroke weight
      stroke(255);
    } else {
      strokeWeight(0); 
    }
    if (circle.x >= width ) {
      circle.speed*= -1;  // here we are changing the cirlce speed
    }
    if (circle.x <= 0) {
      circle.speed*= -1; // here again we are changing the circle speed
    }
    circle.x+=circle.speed;  // here moving the x position with combining with the circle speed
    //increases size of circle 'till i is no longer less than 5'
    for (var i=0; i<4;i++){  // here we created a for loop to increase i 
      circle.size=random(randomsize[i]);  // here we are using randomsize array and chosing values in the array using i loop
       fill(random(colorlist[i]),random(colorlist[i]),random(colorlist[i])); // same here we are using +
    }
    ellipse(circle.x, circle.y, circle.size, circle.size); // here we are changing the ellipse x and y positions, and size using object properties
}


