class Shape {
   constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        throw new Error('This is wrong.');
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}

module.exports = Shape;