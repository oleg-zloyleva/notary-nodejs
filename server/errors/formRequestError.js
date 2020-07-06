
class FormRequestError extends Error{
    constructor(errorsArray) {
        super();
        this._statusCode = 422;
        this.array = errorsArray;
    }
}

module.exports = FormRequestError;
