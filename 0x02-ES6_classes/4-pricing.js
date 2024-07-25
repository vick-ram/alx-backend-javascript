import Currency from './3-currency';

export default class Pricing {
    constructor(amount, currency) {
        this._amount = this.validateNumber(amount, 'Amount');
        this._currency = currency
    }

    validateNumber(value, attribute) {
        if (typeof value !== 'number') {
            throw new TypeError(`${attribute} must be a number`);
        }
        return value;
    }

    get amount() {
        return this._amount;
    }

    set amount(newAmount) {
        this._amount = this.validateNumber(newAmount, 'Amount');
    }

    get currency() {
        return this._currency;
    }

    set currency(newCurrency) {
        if (!(newCurrency instanceof Currency)) {
          throw new TypeError('Currency must be an instance of Currency');
        }
        this._currency = newCurrency;
      }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}