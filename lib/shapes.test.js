const { Circle, Square, Triangle } = require('../lib/shapes.js');

describe('Shapes', () => {

  describe('Circle', () => {
    it('should render a string for a circular SVG in the user specified color', () => {
      const circle = new Circle();
      circle.setColor("white");
      expect(circle.render()).toMatch('<circle cx="150" cy="100" r="80" fill="white" />');
    });
  });

  describe('Triangle', () => {
    it('should render a string for a triangular SVG in the user specified color', () => {
      const triangle = new Triangle();
      triangle.setColor("orange");
      expect(triangle.render()).toMatch('<polygon points="150, 10 10, 190 290, 190" fill="orange" />');
    });
  });

  // Testing the Square class.
  describe('Square', () => {
    it('should render a string for a square SVG in the user specified color', () => {
      const square  = new Square();
      square.setColor("red");
      expect(square.render()).toMatch('<rect x="50" y="0" width="200" height="200" fill="red" />');
    });
  });
});