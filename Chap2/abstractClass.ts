namespace AbstractNamespace {
  abstract class Vehicle {

    constructor(protected wheelCount: number) {}

    abstract updateWheelCount(newWheelCount: number): void

    showNumbersOfWheels() {
      console.log(`moved ${this.wheelCount} miles`);
    }

  }

  class Motorcycle extends Vehicle {
    constructor() {
      super(2);
    }
    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`Motorcycle has ${this.wheelCount}`);
    }
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }
    updateWheelCount(newWheelCount: number) {
        this.wheelCount = newWheelCount;
        console.log(`Automobile has ${this.wheelCount}`);
    }
    showNumberOfWheels(){
        console.log(`moved ${this.wheelCount} miles (by children)`);
    }
  }
  const motorcycle = new Motorcycle();
  motorcycle.updateWheelCount(1);
  const automobile = new Automobile();
  automobile.updateWheelCount(3);
  automobile.showNumberOfWheels();
}
