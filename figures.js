console.warn("Tasks 1.2.12 - 1.2.31");

class Square {
  constructor(a) {
    this.a = a;
  }

  static help() {
    console.log(
      "Square - це чотирикутник, у якого всі сторони рівні та всі кути прямі."
    );
  }

  length() {
    console.log(`Сума довжин сторін: ${this.a * 4}`);
  }

  square() {
    console.log(`Площа: ${this.a ** 2}`);
  }

  info() {
    console.log(
      `Характеристика квадрата:\nДовжини сторін: ${this.a}, ${this.a}, ${
        this.a
      }, ${this.a}\nКути: 90°, 90°, 90°, 90°\nСума довжин сторін: ${
        this.a * 4
      }\nПлоща: ${this.a ** 2}`
    );
  }
}

class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this.b = b;
  }

  static help() {
    console.log(
      "Rectangle - це чотирикутник, у якого протилежні сторони рівні та всі кути прямі."
    );
  }

  length() {
    console.log(`Сума довжин сторін: ${2 * (this.a + this.b)}`);
  }

  square() {
    console.log(`Площа: ${this.a * this.b}`);
  }

  info() {
    console.log(
      `Характеристика прямокутника:\nДовжини сторін: ${this.a}, ${this.b}, ${
        this.a
      }, ${this.b}\nКути: 90°, 90°, 90°, 90°\nСума довжин сторін: ${
        2 * (this.a + this.b)
      }\nПлоща: ${this.a * this.b}`
    );
  }
}

class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log(
      "Rhombus - це чотирикутник, у якого всі сторони рівні, але кути не обов'язково прямі."
    );
  }

  length() {
    console.log(`Сума довжин сторін: ${this.a * 4}`);
  }

  square() {
    console.log(
      `Площа: ${this.a ** 2 * Math.sin((this.alpha * Math.PI) / 180)}`
    );
  }

  info() {
    console.log(
      `Характеристика ромба:\nДовжини сторін: ${this.a}, ${this.a}, ${
        this.a
      }, ${this.a}\nКути: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${
        this.beta
      }°\nСума довжин сторін: ${this.a * 4}\nПлоща: ${
        this.a ** 2 * Math.sin((this.alpha * Math.PI) / 180)
      }`
    );
  }
}

class Parallelogram extends Rectangle {
  constructor(a, b, alpha, beta) {
    super(a, b);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log(
      "Parallelogram - це чотирикутник, у якого протилежні сторони рівні та паралельні."
    );
  }

  square() {
    console.log(
      `Площа: ${this.a * this.b * Math.sin((this.alpha * Math.PI) / 180)}`
    );
  }

  info() {
    console.log(
      `Характеристика паралелограма:\nДовжини сторін: ${this.a}, ${this.b}, ${
        this.a
      }, ${this.b}\nКути: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${
        this.beta
      }°\nСума довжин сторін: ${2 * (this.a + this.b)}\nПлоща: ${
        this.a * this.b * Math.sin((this.alpha * Math.PI) / 180)
      }`
    );
  }
}

Object.defineProperties(Rhombus.prototype, {
  a: {
    get() {
      return this._a;
    },
    set(value) {
      this._a = value;
    },
  },
  alpha: {
    get() {
      return this._alpha;
    },
    set(value) {
      this._alpha = value;
    },
  },
  beta: {
    get() {
      return this._beta;
    },
    set(value) {
      this._beta = value;
    },
  },
});

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const square = new Square(5);
square.info();

const rectangle = new Rectangle(4, 6);
rectangle.info();

const rhombus = new Rhombus(5, 120, 60);
rhombus.info();

const parallelogram = new Parallelogram(6, 8, 120, 60);
parallelogram.info();

function Triangular(a = 3, b = 4, c = 5) {
  return { a, b, c };
}

console.log(Triangular());
console.log(Triangular(7, 24, 25));
console.log(Triangular(8, 15, 17));

function PiMultiplier(factor) {
  return function () {
    return Math.PI * factor;
  };
}

const multiplyBy2 = PiMultiplier(2);
const multiplyBy1_5 = PiMultiplier(1.5);
const divideBy2 = PiMultiplier(0.5);

console.log(multiplyBy2());
console.log(multiplyBy1_5());
console.log(divideBy2());

function Painter(color) {
  return function (object) {
    if (object.type) {
      console.log(`${color} ${object.type}`);
    } else {
      console.log("No ‘type’ property occurred!");
    }
  };
}

const PaintBlue = Painter("Blue");
const PaintRed = Painter("Red");
const PaintYellow = Painter("Yellow");

const obj1 = { maxSpeed: 280, type: "Truck" };
const obj2 = { maxSpeed: 180, type: "Sportcar", color: "purple" };
const obj3 = {
  avgSpeed: 90,
  color: "magenta",
  loadCapacity: 2400,
  isCar: true,
};

PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);
