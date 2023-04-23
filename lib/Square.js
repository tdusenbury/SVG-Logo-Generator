const Shape = require("./Shape");

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
    };
}

module.exports = Square;