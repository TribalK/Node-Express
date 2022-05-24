class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.getRadius();
  }

  getPerimeter() {
    return 2 * Math.PI * this.getRadius();
  }
}

module.exports = Circle;
