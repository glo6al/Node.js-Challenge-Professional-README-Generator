// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = ['Application Title:', 'Application Description:', 'Application Features:', 'How to use:', 'Version'];

inquirer.prompt(
    [
        {
            type: 'title',
            message: 'What is your project title?',
            name: 'Project Title',
            validate: (value) => {if (value){return true} else {return 'Please enter a project title.'}},
        },
        {
            type: 'input',
            message: 'Describe your project.',
            name: 'Project Description',
            validate: (value) => {if (value){return true} else {return 'Please enter a project description.'}},
        },
        {
            type: 'input',
            message: 'How do you install your project?',
            name: 'Installation Instructions',
            validate: (value) => {if (value){return true} else {return 'Please enter installation instructions.'}},
        },
        {
            type: 'input',
            message: 'How should someone use your project?',
            name: 'Usage Instructions',
            validate: (value) => {if (value){return true} else {return 'Please enter usage instructions.'}},
        },
        {
            type: 'list',
            message: 'What license do you?',
            name: 'Project License',
            choices: ['MIT', 'GPL', 'Apache', 'GNU', 'N/A'],
            validate: (value) => {if (value){return true} else {return 'Please choose at least one license.'}},
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'Github Username',
            validate: (value) => {if (value){return true} else {return 'Please enter your Github username.'}},
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'Email',
            validate: (value) => {if (value){return true} else {return 'Please enter your email.'}},
        },
    ]
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
