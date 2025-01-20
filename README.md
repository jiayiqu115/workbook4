# Abstract Art Generator https://jiayiqu115.github.io/workbook4/

## Overview
This project generates **abstract art** by creating random shapes with varying sizes, colors, and positions. Users can interact with the canvas by clicking a button to add a new artistic element, allowing the artwork to grow dynamically.

---

## Features

### Dynamic Canvas Setup:
- A **400x400 pixel canvas** is created with a dark background for better visual contrast.
- The canvas is initialized with **no stroke** (borders) for shapes.

### Interactive Button:
- A button labeled **"Create Art"** is positioned at the bottom of the canvas.
- Clicking the button triggers the creation of a random shape on the canvas.
let button = createButton('Create Art');
Interactive Button
A button is created and positioned at the bottom center of the canvas. Clicking the button triggers the createRandomShape function:
```javascript
button.position(width / 2 - 40, height - 50);
button.mousePressed(() => {
  createRandomShape();
});
```
Shape Creation
The createRandomShape function generates a random shape by:

Selecting a shape type (ellipse, rect, or triangle) randomly.
Calculating random position (x, y) and size.
Generating a random color with transparency.
Drawing the selected shape on the canvas:
```javascript
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
```
### Random Shape Generation:
- Shapes include:
  - **Ellipses**
  - **Rectangles**
  - **Triangles**
- Each shape is randomly positioned and scaled on the canvas.

### Color and Transparency:
- Colors are randomly generated using **RGB values**, with added transparency for layering effects.
- This creates a dynamic and abstract appearance with overlapping shapes.

---

## Code Breakdown

### Canvas Initialization:
The `setup` function creates the canvas and sets the background color:

```javascript
function setup() {
  createCanvas(400, 400);
  background(30); // Set a dark background
  noStroke(); // Disable borders for shapes
}
# Abstract Art Generator

## Overview
This project generates abstract art by creating random shapes with varying sizes, colors, and positions. Users can interact with the canvas by clicking a button to add a new artistic element, allowing the artwork to grow dynamically.
