let size = 100;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  
  translate(300, 300);
  circle(0, 0, size);

}

function mousePressed(){
  size += 10;
}

function mouseReleased(){
  size -= 10;
}





