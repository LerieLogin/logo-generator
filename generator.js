const fs = require('fs')
const inquire = require('inquirer')
const generateLogo = require('./generate-logo')


const questions = [
    {
        type: 'input',
        name: 'logoName',
        message: 'type 3 letters'
    },
    {
        type: 'input',
        name: 'color',
        message: 'enter color:'
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
        const answers = await inquire.prompt(questions)
        const logo = generateLogo(answers)
        fs.writeFile('logo.svg', logo, (err) => {
            if (err) {
                throw err
            }
            console.log('logo generated :)')
        })
    } catch (error) {
        console.error('error occurred', error)
    }
}

init()