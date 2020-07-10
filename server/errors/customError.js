/**
 * Functional style
 */

// function CustomError (text,code) {
//     this._statusCode = code;
//     this.message = text;
// }
//
// CustomError.prototype = Object.create(Error.prototype);
// CustomError.prototype.constructor = CustomError;

/**
 * Class style
 */
class CustomError extends Error {
  constructor(text, code) {
    super();
    this._statusCode = code;
    this.message = text;
  }
}

module.exports = CustomError;
