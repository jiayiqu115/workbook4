function setup() {
  createCanvas(400, 400);
  background(30);
  noStroke(); 
  let button = createButton('Create Art');
  button.position(width / 2 - 40, height - 50);
  button.mousePressed(() => {
    createRandomShape();
  });
}

function createRandomShape() {
  let shapeType = random(['ellipse', 'rect', 'triangle']);
  let x = random(width); 
  let y = random(height); 
  let size = random(20, 80); 
  let col = color(random(255), random(255), random(255), random(50, 150)); 
  fill(col);
  if (shapeType === 'ellipse') {
    ellipse(x, y, size, size);
  } else if (shapeType === 'rect') {
    rect(x, y, size, size);
  } else if (shapeType === 'triangle') {
    triangle(
      x, y,
      x + size * random(0.5, 1.5), y - size * random(0.5, 1.5),
      x - size * random(0.5, 1.5), y + size * random(0.5, 1.5)
    );
  }
}

function draw() {
}