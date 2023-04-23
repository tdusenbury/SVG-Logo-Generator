const { Shape } = require("./Shape");

class Circle extends Shape {
    render() {
        return `<circle cx="${centerX}" cy="${centerY}" r="80" fill="this.shapeColor}" />`;
    };
}

module.exports = Circle;