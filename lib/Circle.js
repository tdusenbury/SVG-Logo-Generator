// Imports "Shape.js file so it can be used within this file"
const Shape = require("./Shape");
// Creates an instance of the parent class "Shape"
class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    // renders a string that is used in the generateSVG function
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    };
}
// Exports "Circle.js" to be used in other files
module.exports = Circle;