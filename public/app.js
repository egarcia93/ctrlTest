let slider1, slider2
let button1, button2, button3

let socket = io();

socket.on('connect',function(){
  console.log("Connected");

});

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //BUTTONS
  button1 = createButton('click me');
  button1.position(600, 100);
  button1.size(60, 60);
  
  button2 = createButton('click me');
  button2.position(600, 250);
  button2.size(60, 60);
  
  button2 = createButton('click me');
  button2.position(600, 400);
  button2.size(60, 60);
  
  //SLIDERS
  slider1 = createSlider(0, 255, 100);
  slider1.position(750, 200);
  slider1.style('width', '300px');

  slider2 = createSlider(0, 255, 100);
  slider2.position(750, 350);
  slider2.style('width', '300px');
  
}

let value = 0
function draw() {
  background(45);
  noFill();
  stroke(255)
  strokeWeight(2)
  rect(60, 60, 450, 450)
  
  
  //buttons
  //fill(0);
  //rect(600, 100, 70, 70);
  //rect(600, 250, 70, 70)
  //rect(600, 400, 70, 70)
  socket.emit('data',slider2.value());
  //print('slider1:',slider1.value())
  
  
}


