const Triangle = require('./Triangle');
const Square = require('./Square');
const Circle = require('./Circle');

function generateSVG(responses) {
    var shape;
    var y = 125;
    if (responses.shape == 'triangle') {
        console.log("You have chosen a triangle.")
        shape = new Triangle();
        y = 165;
    }else if (responses.shape == 'circle') {
        console.log("You have chosen a circle.");
        shape = new Circle();
    }else {
        console.log("You have chosen a square.")
        shape = new Square();
    }
}
    shape.setColor(responses.shapeColor);
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg\">

        <rect width="100" height="100" fill="${this.shapeColor}">
        
        ${shape.render()}

        <text x="150" y="${y}" fill="${this.textColor}" font-size="2em" text-anchor="middle" alignment-baseline="middle">${this.text}</ text>
        </svg>`;
}

module.exports = {generateSVG};