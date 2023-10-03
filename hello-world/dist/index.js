"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a Circle");
    }
}
let shape = new Circle(1, "red");
shape.render();
//# sourceMappingURL=index.js.map