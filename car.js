console.warn("Tasks 1.2.3 - 1.2.6")


var car1 = new Object();
car1.color = "red";
car1.maxSpeed = 180;
car1.tuning = true;
car1.numberOfAccidents = 0;
car1.driver = new Object();
car1.driver.name = "Daniuk Vladyslav";
car1.driver.category = "C";
car1.driver.personalLimitations = "No driving at night";
car1.drive = function () {
  console.log("I am not driving at night");
};

var car2 = {
  color: "blue",
  maxSpeed: 220,
  tuning: false,
  numberOfAccidents: 2,
  driver: {
    name: "Daniuk Vladyslav",
    category: "B",
    personalLimitations: null,
  },
  drive: function () {
    console.log("I can drive anytime");
  },
};

car1.drive();
car2.drive();
