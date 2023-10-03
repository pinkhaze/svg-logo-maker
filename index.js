const fs = require('fs');
const inquirer = require('inquirer');

// import prompts and shape classes
const { questions } = require('./lib/questions');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => 
  err ? console.log(err) : console.log('Generated "logo.svg". Your SVG file is located in the "dist" folder.')
  );
}

function init() {
    inquirer
    .prompt(questions)
  .then(answers => {

    let userShape;

    switch (answers.logoShape) {
      case 'Triangle':
        userShape = new Triangle();
        break;
      case 'Circle':
        userShape = new Circle();
        break;
      case 'Square':
        userShape = new Square();
        break;
      default:
        console.log('Shape not supported')
        break;
    }

    const { shapeColor, logoText, textColor } = answers;

    userShape.setColor(shapeColor);


    const svgEl = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${userShape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
          ${logoText}
        </text>
      </svg>
    `;

    writeToFile(`./dist/logo.svg`, svgEl);
  })
}

init();

