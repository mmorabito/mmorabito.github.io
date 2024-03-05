// starting point
const rtx = 50;
const rty = 400;


function setup() {
  createCanvas(510, 510);
  // height slider setup
  sliderH = createSlider(1, 300, 250);
  sliderH.position(65, 10);
  sliderH.size(180);
  // width slider setup
  sliderW = createSlider(1, 400, 150);
  sliderW.position(65, 30);
  sliderW.size(240);
}

function draw() {
  background(250);
  let ht = 250;
  let wd = 150;
  // Use the slider as height value.
  let h = sliderH.value();
  ht = h;
  // Use the slider as width value.
  let w = sliderW.value();
  wd = w;


  //  
  let ax = rtx;
  let ay = rty - ht;
  //
  let bx = rtx + wd;
  let by = rty;  
  
  
  fill(180, 50, 10);
  triangle(ax, ay, rtx, rty, bx, by);
    //
  let hyp = Math.sqrt(ht**2 + wd**2)
  hyp = round(hyp, 2);
  

  // info to screen
  text("leg a: " + ht, 10, 25)
  text("leg b: " + wd, 10, 45)
  text("hyp: " + hyp, 10, 65)
  text("Leg A", 10, 350)
  text("Leg B", 100, 420)
}



