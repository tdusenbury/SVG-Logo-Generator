const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes')



const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 letters for your logo:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter the text color by color name or hexadecimal number:'
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
        message: 'Please enter the shape color by color name or hexadecimal number:'
    },
]
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            const shape = new Shapes(answers.text, answers.textColor, answers.shape, answers.shapeColor)

            fs.writeFile('./examples/log.svg', shape.render(), (err) =>
                err ? console.log(err) : console.log("Your logo has been created."))
        })
}
init()

