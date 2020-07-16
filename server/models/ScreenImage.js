const mongoose = require('mongoose');
const newSchema = require('../schemas/ScreenImage');
const CustomError = require('../errors/customError');

newSchema.statics.getOne = async function ({ params: { id } }) {
  const data = await this.findById(id);
  if (!data) throw new CustomError('Screen not found', 404);
  return data;
};

module.exports = mongoose.model('ScreenImage', newSchema);
