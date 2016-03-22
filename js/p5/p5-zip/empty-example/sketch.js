
var img;
function preload(){
  img = loadImage("./albumcover.1.png");
}

function setup() {
  createCanvas(400, 400);
  image(img, 0, 0);
}
