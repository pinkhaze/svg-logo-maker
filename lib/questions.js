const questions = [
    {
        type: 'input',
        message: '1. SET LOGO TEXT\nEnter up to 3 characters: ',
        name: 'logoText',
        validate: async (input) => {
            if (input.length > 3) {
                return 'Too many characters! Try again.'
            }
            return true;
        }
    },
    {
        type: 'input',
        message: '2. SET TEXT COLOR\nEnter a color keyword or hexadecimal number: ',
        name: 'textColor',
        // Credit: https://gist.github.com/mairh/233f6b4ffdbaaed8ec75bb0bef087e8f
        validate: async (textColor) => {
            valid = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(textColor)
            if (valid) {
                  return true;
              } else {
                  return 'Try again. You did not enter a hexadecimal number.'
              }
        }
    },
    {
        type: 'list',
        message: '3. SET LOGO SHAPE\nSelect a shape from the following options:',
        name: 'logoShape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        message: '4. SET LOGO COLOR\nEnter a color keyword or hexadecimal number: ',
        name: 'shapeColor',
    },
];

module.exports = { questions };
