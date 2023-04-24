// Import all the node.js modules and files needed by the "index.js" file to run
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/generateSVG');
// Questions are asked using the correct Inquirer syntax
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 letters for your logo:',
        validate: function(input) {
            return input.length <= 3;
        }    
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter the text color by name or hexadecimal color number:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape:',
        choices: ['Square','Triangle', 'Circle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter the shape color by name or hexadecimal color number:'
    },
]
// Calling the function to create the file and write the image to that file after the responses to the questions have gone through the generateSVG function.
function writeToFile(fileName, responses) {
    finishedShape = generateSVG(responses);
    fs.writeFile(fileName, finishedShape, (err) =>
    err ? console.log(err) : console.log ('Your image is being generated in the logo.svg file!')
    );
}

// When 'node index.js' is entered into the terminal, this function is called first to get the responses which are then sent to the writeToFile function.
function init() {
    inquirer.prompt(questions)
        .then((responses) => {
            const fileName = 'examples/logo.svg';
            writeToFile(fileName, responses)
        })
}
init()

