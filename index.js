const inquirer = require('inquirer');
const fs = require('fs');
const {generateSVG} = require('./lib/generateSVG');
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
        message: 'Please explain how to install your application.',
        choices: ['Square','Triangle', 'Circle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter the shape color by name or hexadecimal color number:'
    },
]

function writeToFile(fileName, responses) {
    finishedShape = generateSVG(responses);
    fs.writeFile(fileName, finishedShape, (err) =>
    err ? console.log(err) : console.log ('Your image is being generated in the logo.svg file!')
    );
}

function init() {
    inquirer.prompt(questions)
        .then((responses) => {
            const fileName = 'examples/logo.svg';
            writeToFile(fileName, responses)
        })
}
init()

