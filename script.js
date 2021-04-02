let MENU = 0
let img2;

function preload() {
  img2 = loadImage('IMG_6915.JPG');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  print(mouseX, mouseY)
  background(255);
  fill(0, 255, 0);
  rect(50, 50, 200, 75);
  fill(255, 0, 255);
  rect(50, 200, 200, 75);
  fill(255, 0, 0);
  rect(50, 350, 200, 75);
  textSize(50)
  fill(255);
  text('START', 70, 106);
  text('EXIT', 94, 406);
  textSize(26);
  text('INSTRUCTIONS', 52, 248);
  image(img2, 250, 0, 550, 550);

  if (MENU == 1) {
    background(0, 255, 0)
    fill(0)
    textSize(20)
    text('Right Click to return to MENU', 525, 30)
    if (mouseButton == RIGHT) {
      MENU = 0
    }
  } // START GAME
  if (MENU == 2) {
    background(255, 0, 255)
    textSize(20)
    text('Right Click to return to MENU', 525, 30)
    textSize(30)
    text('1. Rocks will fall from the top of the screen.', 50, 150)
    text('2. Move your character using arrow keys', 50, 200)
    text('<- and -> to avoid being crushed.', 80, 240)
    text('3. The game is over when a rock hits you.', 50, 290)
    if (mouseButton == RIGHT) {
      MENU = 0
    }
  } // INSTRUCTIONS
  if (MENU == 3) {
    background(255, 0, 0)
    textSize(75)
    text('COME AGAIN SOON!', 25, height / 2)
  } // EXIT 
}

function mouseClicked() {
  if (MENU == 0) {
    if (mouseX < 200 && mouseX > 50) {
      if (mouseY < 125 && mouseY > 50) {
        MENU = 1
      }
      if (mouseY < 275 && mouseY > 200) {
        MENU = 2
      }
      if (mouseY < 425 && mouseY > 350) {
        MENU = 3
      }
    }
  }
}