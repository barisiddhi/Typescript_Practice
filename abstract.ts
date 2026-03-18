abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return 3.14 * this.radius * this.radius;
    }
}

let c = new Circle(5);
console.log("Area:", c.area());