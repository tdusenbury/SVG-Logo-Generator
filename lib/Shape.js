class Shape {
   constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        throw new Error('This is wrong.');
    }
}


module.exports = Shape;




















// class Shapes {
//     constructor(text, textColor, shape, shapeColor) {
//         this.text = text;
//         this.textColor = textColor;
//         this.shape = shape;
//         this.shapeColor = shapeColor;
// }
// render() {
//     let shapeMath = "";
//     let centerX, centerY;

//     switch (this.shape) {
//         case "Circle":
//             centerX = 150;
//             centerY = 100;
//             shapeMath = `<circle cx="${centerX}" cy="${centerY}" r="50" fill="${this.shapeColor}" />`;
//             break;
//         case "Square":
//             centerX = 100;
//             centerY = 100;
//             shapeMath = `<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
//                 break;
//         case "Triangle":
//             centerX = 100;
//             centerY = 115;
//             shapeMath = `<polygon points = "100,50 50,150 150,150" fill="${this.shapeColor}" />`;
//                 break;
//                 default:
//                 break;
//     }
//     return `<svg width="300" height="200" version="1.1" version="1.1" xmlns="http://www.w3.org/2000/svg">
//         ${shapeMath}
//         <text x="${centerX}" y="${centerY}" fill="${this.textColor}" font-size="2em" text-anchor="middle" alignment-baseline="middle">${this.text}</ text>
//         </svg>`;
//     }
// }



