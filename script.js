var mod;
function setup() {
  mode = 0;
  createCanvas(600,400);
  textSize(21);
}

function draw() {
  clear();
  if (mode==0) {
    text('Press Enter to start',20,40);
  }
  if (mode==1) {
    ellipse(100,100,100,100)

  }
}

function keypressed() {
  if (keyCode===Spacebar) {
    mode=1;
  }
}