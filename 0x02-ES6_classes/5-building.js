export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = this.validateNumber(sqft, 'Sqft');
  }

  static validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = this.validateNumber(newSqft, 'Sqft');
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
