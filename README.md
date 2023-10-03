# SVG Logo Maker

  [![License](https://img.shields.io/badge/License-MIT-orange.svg)](https://choosealicense.com/licenses/mit/)

  ## Description

  This project uses `Node.js` to build a command line application that accepts user input, generates a logo from the user input and saves the logo as an `SVG` file. The application uses `Jest` to run unit tests and `Inquirer` to accept user input. In addition, the application has the following capabilities:


 * when prompted, the user can enter up to three characters
 * when prompted, the user can enter a color keyword (OR a hexadecimal number)
 * when prompted, the user is presented with a list of shapes to choose from (circle, triangle and square)
 * when prompted, the use can enter a color keyword (OR a hexadecimal number) for the shape's color
 * after all the prompts have been answered, an SVG file is created named `logo.svg`
 * a "Generated logo.svg" message is also printed in the command line
 * when the user opens the `logo.svg` file in a browser
 * then a 300x200 pixel image that matches the user's criteria displays

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  1. If not already installed, download [Node.js](https://nodejs.org/en/download) and [Git](https://git-scm.com) (if using Windows)
  
  2. Clone the `svg-logo-maker` repository to your machine from the command line (Git Bash on Windows) or terminal (Mac)
  
  ```bash
      git clone git@github.com:pinkhaze/svg-logo-maker
  ```

  3. In your code editor of choice, navigate to the `svg-logo-maker` repository

  4. Open a new terminal and type the following command to initialize a new Node project:

  ```bash
      npm init -y
  ```

  5. Type the following command to install the `inquirer` and `jest` packages:

  ```bash
      npm i inquirer
      npm i jest
  ```

 6. Type the following command to start the application:

  ```bash
      npm start
  ```

  ## Usage

  [SVG Logo Walk-Through Video.webm](https://github.com/pinkhaze/svg-logo-maker/assets/55771228/b6223a80-9a1b-4076-b3c4-4d61b5bd577c)

  ## Credits

  [Module 10 Mini Project](https://git.bootcampcontent.com/University-of-Minnesota/UofM-VIRT-FSF-PT-04-2023-U-LOLC-ENTG/-/tree/main/18-NoSQL/01-Activities/28-Stu_Mini-Project)
  [Validate in Inquirer](https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8)

  ## License

  [MIT License](https://choosealicense.com/licenses/mit/)

  ## Contribute

  NA
  
  ## Tests

  Run the following command in your terminal to initiate unit tests:

   ```bash
      npm test
  ```

  ## Questions

  Check out the other projects on my GitHub profile at [pinkhaze](https://github.com/pinkhaze).
