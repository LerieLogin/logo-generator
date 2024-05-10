const fs = require('fs')
const inquire = require('inquirer')

const questions = [
    {
        type: 'input',
        name: 'logoName',
        message: 'type 3 letters'
    },
    {
        type: 'input',
        name: 'color',
        message: 'endter color:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Enter shape:',
        choices: ['circle', 'triangle', 'square']
    }
];


const init = async () => {
    try {
        const answers = await inquire.createPromptModule(questions)
        const logo = generateLogo(answers)
        fs.writeFile('logo.svg', logo)
    } catch (error) {
        console.error('error occurred', error)
    }
}

init()