export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const symbols = {
      brand: Symbol.for('brand'),
      motor: Symbol.for('motor'),
      color: Symbol.for('color'),
    };

    const newCar = new Car(
      this[symbols.brand],
      this[symbols.motor],
      this[symbols.color],
    );

    return newCar;
  }
}
