export default class Building {
    constructor(sqft) {
        this._sqft = this.validateNumber(sqft, 'Sqft');
    }

    validateNumber(value, attribute) {
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
        throw new Error('Class extending Building must override evacuationWarningMessage')
    }
}