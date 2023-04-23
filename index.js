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

function writeFile(fileName, data) {
    console.log('Your file is being created.')
fs.writeFile(fileName, data, function (err) {

})
}



function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            const shapes = new Shapes(answers.text, answers.textColor, answers.shape, answers.shapeColor)

            fs.writeFile('./examples/logo.svg', shapes.render(), (err) =>
                err ? console.log(err) : console.log("Your logo.svg file has been created."))
        })
}
init()

