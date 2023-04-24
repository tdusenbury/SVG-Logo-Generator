const Shape = require("./Shape");

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<rect x="20" y="20" width="150" height="150" fill="${this.shapeColor}" />`;
    };
}

module.exports = Square;