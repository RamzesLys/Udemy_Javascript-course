'use strict';

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

//наслідування
class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);//наслідування батьківського конструктора, super ЗАВЖДИ має бути першим
    this.text = text;
    this.bgColor = bgColor

  } 

  showMyProps() {
    console.log(`Текст: ${this.text}, колір: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 10, 'Привіт World', 'red');
div.showMyProps();
console.log(3, div.calcArea());

const square = new Rectangle(10, 15);

const long = new Rectangle(20, 100);

console.log(1, square.calcArea());

console.log(2, long.calcArea());

