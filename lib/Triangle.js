const Shape = require("./Shape");

class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<polygon points = "150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    };
}

module.exports = Triangle;