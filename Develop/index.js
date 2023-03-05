// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message: "Please enter a name for your project.",
    },
    {
        type:"input",
        name:"description",
        message: "Please enter the description for your project.",
    },
    {
        type:"input",
        name:"screenshot",
        message: "Please provide the relative path to the image that you want to include for your screenshot.",
    },
    {
        type: "input",
        name: "link",
        message: "Please provide a URL where a user can access your deployed application."
      },
    {
        type: "checkbox",
        name: "license",
        message: "Please select from the following list of licenses applicable for this project:",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide instructions on how to install your project",
    },
    {
        type: "input",
        name: "dependencies",
        message: "Please list any dependencies for this project",
    },
    {
        type:"input",
        name:"usage",
        message: "State the languages or technologies associated with this project.",
    },
    {
        type:"input",
        name:"creator",
        message: "Please enter your Github username.",
    },
    {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
      },
    {
        type:"input",
        name:"contributors",
        message: "Please enter or list contributors with their Github usernames",
        default: "",
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable.",
      },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./newFile/README.md", generateMarkdown({ ...responses }));
      });
}

// Function call to initialize app
init();
