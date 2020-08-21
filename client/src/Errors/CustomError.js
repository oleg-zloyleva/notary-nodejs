class CustomError extends Error{
  constructor({data, status}) {
    super();
    this.data = data;
    this.status = status;
  }
}

export { CustomError }