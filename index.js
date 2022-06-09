// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { renderSection } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//prompt user to input values for questions array
inquirer.prompt(
    [
        {
            type: 'title',
            message: 'What is your project title?',
            name: 'title',
            validate: (value) => {if (value){return true} else {return 'Please enter a project title.'}},
        },
        {
            type: 'input',
            message: 'Describe your project.',
            name: 'description',
            validate: (value) => {if (value){return true} else {return 'Please enter a project description.'}},
        },
        {
            type: 'input',
            message: 'How do you install your project?',
            name: 'installation',
            validate: (value) => {if (value){return true} else {return 'Please enter installation instructions.'}},
        },
        {
            type: 'input',
            message: 'How should someone use your project?',
            name: 'usage',
            validate: (value) => {if (value){return true} else {return 'Please enter usage instructions.'}},
        },
        {
            type: 'list',
            message: 'What license do you?',
            name: 'license',
            choices: ['MIT', 'GNU', 'Apache', 'MPL', 'Other'],
            validate: (value) => {if (value){return true} else {return 'Please choose at least one license.'}},
        },
        {
            type: 'input',
            message: 'How can others contribute to this project?',
            name: 'contribute',
            validate: (value) => {if (value){return true} else {return 'Please enter instructions on how others can contribute to this project.'}},
        },
        {
            type: 'input',
            message: 'How can others test this project?',
            name: 'test',
            validate: (value) => {if (value){return true} else {return 'Please enter instructions on how others can test this project.'}},
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
            validate: (value) => {if (value){return true} else {return 'Please enter your Github username.'}},
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            validate: (value) => {if (value){return true} else {return 'Please enter your email.'}},
        },
    ]
//function to create template for README file
).then(({
    //object to hold key/value pairs for template
    title,
    description,
    installation,
    usage,
    license,
    contribute,
    github,
    email

}) => {
const template = `
${renderBadge}

# ${title}
##Table of Contents

-[Description](#description)
-[Installation Instructions](#installation)
-[Usage Instructions](#usage)
-[License](#license)
-[How to Contribute]{#contribute}
-[How to Test]{#test}
-[GitHub](#github)
-[Email](#email)

##Description
${description}
##Installation Instructions
${installation}
##Usage Instructions
${usage}
${renderSection}
##How to Contribute
${contribute}
##How to Test
${test}
##Questions? Contact:
-GitHub: ${github}
-Email: ${email}`

//function to pass parameters for readme file
writeToFile(title, template);
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Success! Your README now been generated.')
    })
}






// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
