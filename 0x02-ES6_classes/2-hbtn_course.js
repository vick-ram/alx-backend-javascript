export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'Name');
    this._length = this.validateNumber(length, 'Length');
    this._students = this.validateArray(students, 'Students');
  }

  validateString(value, attribute) {
    if (typeof value !== 'string') {
        throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }
    
  validateNumber(value, attribute) {
    if (typeof value !== 'number') {
        throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  validateArray(value, attribute) {
    if (!Array.isArray(value)) {
        throw new TypeError(`${attribute} must be an array`);
    }
    return value;
  }

  set name(newName) {
    this._name = this.validateString(newName, 'Name');
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    this._length = this.validateNumber(newLength, 'Length');
  }

  get length() {
    return this._length;
  }

  set students(newStudents) {
    this._students = this.validateArray(newStudents, 'Students');
  }

  get students() {
    return this._students;
  }
}
