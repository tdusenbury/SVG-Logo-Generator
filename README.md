# .svg Logo Generator

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description 

Welcome to my .svg Logo Generator! 

By entering 'node index.js' into the terminal command-line, you can create a basic logo that saves as a .svg file.

This generator allows a developer to create a basic logo in the shape of a circle, square, or triangle. 
The user can choose up to three letters for their logo as well as font and background colors. 
If you know the hexadecimal color code, that can be entered also. 
The logo is set to default as a 300 x 200 pixel image, but this can be adjusted as required.

A developer could use this basic logo as a placeholder for project proposals or use it as a base and add additional shapes and allow more lettering. 

Additionally, testing using jest is included showing the application does what it claims to do! 

If you have found this generator outside of GitHub and wish to view the original, [visit my Repository link here.](https://github.com/tdusenbury/SVG-Logo-Generator)

[Please see the video of the .svg Logo Generator in action here!]()
## Technology Used 

| [![My Skills](https://skillicons.dev/icons?i=js,nodejs,vscode,svg,github,jest&theme=light)](https://skillicons.dev) 

## Table of Contents

  - [**Description**](#description)
  - [**Installation**](#installation)
  - [**Usage**](#usage)
  - [**Contribution**](#contributing)
  - [**Testing**](#tests)
  - [**Author Info**](#author-info)
  - [**License**](#license)

## Installation

The .svg Logo Generator requires npm Inquirer. If you would like to run the included tests, or create your own, Jest is also needed.

Both can be added by running `init i` in the terminal command-line. This will install the correct version of the dependencies which are already listed for you in the package.json file.

Additionally, an SVG extension can be added to view the logo within your code editor such as VS Code.


```package.json
  "scripts": {
    "test": "jest"
  },
  "homepage": "https://github.com/tdusenbury/SVG-Logo-Generator#readme",
  "dependencies": {
    "inquirer": "8.0"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": 
    "jest": "^24.9.0"
```
## Usage 

Open the terminal in the root file of SVG-LOGO-GENERATOR. Enter 'node index.js' into the command-line. Questions will appear confirming the parameters of your logo which include the text (up to 3 letters), text color (written or hexadecimal). choice of shape (Circle, Square, or Triangle), and shape color.

A successful generation will look like this in the terminal:

![alt text](./images/Screenshot%20Terminal.PNG)

And will generate a .svg file with this image:

![alt text](./images/Generated%20Logo.PNG)

## Learning Points 

I created a parent class of "Shape" and placed the common properties here. 

The classes of "Triangle", "Circle", and "Square" that are extended to "Shape" and use inheritance to reuse the code found there.

Each shape's class includes the 'render()' method that returns a string for the SVG file with the shapes color.

These classes are utilized in conjunction with the responses generated using the Inquirer prompt syntax and then running through a generateSVG function.


## Tests

To ensure the generator is functioning properly, tests on each shape were created in the 'shapes.test.js' file. To run the tests, enter 'npm run test' in the command-line. If all tests pass, the terminal will display:

```Jest

const Circle = require('./Circle');

describe('Circle', () => {
  it('should render a circle shape in the correct color', () => {
    let shapeColor = "blue";
    let circle = new Circle(shapeColor);
    let output = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`
    expect(circle.render()).toEqual(output);
  })
});
```

![alt text](./images/Screenshot%20Terminal.PNG)



## Author Info
My name is Tamara "T" Dusenbury
If you have any questions about me or this project, please contact me:
  
- [**Github**](https://github.com/tdusenbury)

- [**LinkedIn**](https://linkedin.com/in/tamara-dusenbury-02ab8591)

- [**Email**](mailto:tamara.dusenbury@gmail.com)


## Credits

Shout outs to my whole cohort for great classes, but especially Laurie, Austin, Cassie, Afi, Liubov, Kakazi, Bahareh, Victoria, David, my tutor Katie, the Cohort TA's, and Jerome.

## Contributing

If you would like to contribute, please follow the [Contributor Covenant](https://www.contributor-covenant.org/).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## License

This projects holds an MIT License.