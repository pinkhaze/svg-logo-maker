// const inquirer = require('inquirer');
// const fs = require('fs');
// const questions = require('./lib/questions.js')

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, generateMarkdown(data), (err) => 
//     err ? console.log(err) : console.log('Success! Your README file is located in the dist folder.')
//     );
// }

// // Function to initialize app
// function init() {
//     inquirer
//     .prompt(questions)
//     .then((answers) => {
//         writeToFile('./dist/test.', answers);   
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// };

// // Function call to initialize app

const { questions } = require('./lib/questions');
const fs = require('fs');
const inquirer = require('inquirer');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Success! Your SVG logo file is located in the dist folder.')
    );
}


function init() {
    inquirer
    .prompt(questions)
  .then(answers => {
 
    writeToFile('./dist/logo.svg', answers);
  })
}

init();
