console.warn("Tasks 1.2.7 - 1.2.10")


function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;

  this.trip = function () {
    if (!this.driver) {
      console.log("No driver assigned");
    } else {
      const nightDrivingMessage = this.driver.nightDriving
        ? "drives at night"
        : "does not drive at night";
      console.log(
        `Driver ${this.driver.name} ${nightDrivingMessage} and has ${this.driver.experience} years of experience`
      );
    }
  };
}

Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience,
  };
};

var truck1 = new Truck("red", 5000, 60.5, "Volvo", "FH16");
var truck2 = new Truck("blue", 4000, 55.3, "Scania", "R450");

truck1.AssignDriver("Daniuk Vladyslav", true, 10);
truck2.AssignDriver("Daniuk Vladyslav", false, 5);

truck1.trip();
truck2.trip();
