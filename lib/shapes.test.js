const Shapes = require('./shapes');
//Link to the shapes file

describe('Shapes', () => {
    //have it look at the Shapes class by creating a new instance of Shapes class
  it('should render a circle shape and color', () => {
    const shape = new Shapes('Test Circle', 'white', 'Circle', 'red');
    //to test to see if when the render method is creating the correct shape.
    const result = shape.render();
    // then use Jest's 'toContain' method to verify the svg string has the correct shape
    expect(result).toContain('<circle');
    expect(result).toContain('fill="red"');
  });

  it('should render a square shape and color', () => {
    const shape = new Shapes('Test Square', 'white', 'Square', 'green');
    const result = shape.render();
    expect(result).toContain('<rect');
    expect(result).toContain('fill="green"');
  });

  it('should render a triangle shape and color', () => {
    const shape = new Shapes('Test Triangle', 'white', 'Triangle', 'blue');
    const result = shape.render();
    expect(result).toContain('<polygon');
    expect(result).toContain('fill="blue"');
  });
});

