const questions = [
    {
        type: 'input',
        message: '1. SET LOGO TEXT\nEnter up to 3 characters: ',
        name: 'logoText',
    },
    {
        type: 'input',
        message: '2. SET TEXT COLOR\nEnter a color keyword or hexadecimal number: ',
        name: 'textColor',
    },
    {
        type: 'list',
        message: '3. SET LOGO SHAPE\nSelect a shape from the following options:',
        name: 'logoShape',
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: 'input',
        message: '4. SET LOGO COLOR\nEnter a color keyword or hexadecimal number: ',
        name: 'shapeColor',
    },
];

module.exports = { questions };
