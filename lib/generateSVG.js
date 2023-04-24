const Triangle = require('./Triangle');
const Square = require('./Square');
const Circle = require('./Circle');


function generateSVG(responses) {
    var shape;
    var y = 125;
    var x = 100;
    console.log(responses.shape)
    if (responses.shape == 'Triangle') {
        console.log("You have chosen a triangle.")
        shape = new Triangle();
        x = 150;
        y = 115;
    } else if (responses.shape == 'Circle') {
        console.log("You have chosen a circle.");
        shape = new Circle();
        x = 150
        y = 105
    } else {
        console.log("You have chosen a square.")
        shape = new Square();
        y = 100
    }
    shape.setColor(responses.shapeColor)
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
        ${shape.render()}
    
        <text x="${x}" y="${y}" fill="${responses.textColor}" font-size="3em" text-anchor="middle" alignment-baseline="middle">${responses.text}</text>
        </svg>`;
    }
module.exports = generateSVG;