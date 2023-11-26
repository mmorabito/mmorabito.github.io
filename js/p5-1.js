let input, button, greeting;

function setup() {
    createCanvas(400, 400);
    
    input = createInput();
    input.position(20,65);

    button = createButton('submit');
    button.position(input.x + input.width, 65);
    button.mousePressed(greet);

    greeting = createElement('h2', 'what is your name?');
    greeting.position(20,5);

    textAlign(CENTER);
    textSize(50);
  }
  
  function draw() {
    background(220);
    ellipse(50,50,80,80);
  }

//   add input and button with useful result 
// https://p5js.org/examples/dom-input-and-button.html