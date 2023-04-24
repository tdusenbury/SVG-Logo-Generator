const Triangle = require('./Triangle');
const Square = require('./Square');
const Circle = require('./Circle');
//Link to the 3 individual shapes file's



describe('Circle', () => {
    //have it look at the Circle class by creating a new instance of Circle class
  it('should render a circle shape in the correct color', () => {
    //tell it what color the circle should be
    let shapeColor = "blue";
    let circle = new Circle(shapeColor);
    //define the circle output
    let output = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`
    // then use Jest's 'toEqual' method to verify the svg string has the correct shape
    expect(circle.render()).toEqual(output);
  })
});

describe('Triangle', () => {
  //have it look at the Triangle class by creating a new instance of Circle class
it('should render a triangle shape in the correct color', () => {
  //tell it what color the triangle should be
  let shapeColor = "red";
  let triangle = new Triangle(shapeColor);
  //define the triangle output
  let output = `<polygon points = "150, 18 244, 182 56, 182" fill="${shapeColor}" />`
  // then use Jest's 'toEqual' method to verify the svg string has the correct shape
  expect(triangle.render()).toEqual(output);
})
});

describe('Square', () => {
  //have it look at the Square class by creating a new instance of Circle class
it('should render a square shape in the correct color', () => {
  //tell it what color the square should be
  let shapeColor = "red";
  let square = new Square(shapeColor);
  //define the square output
  let output = `<rect x="20" y="20" width="150" height="150" fill="${shapeColor}" />`
  // then use Jest's 'toEqual' method to verify the svg string has the correct shape
  expect(square.render()).toEqual(output);
})
});

