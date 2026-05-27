function preload() {
  img = loadImage("assets/images/image.jpeg");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0, 0, 255);
  image(img, 0, 0, width, height);
  rect(width / 2 - 35, 335, 70, 25);
  text("Hello World", width / 2 - 33, 350);
}
