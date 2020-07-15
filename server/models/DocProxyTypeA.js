
const mongoose = require('mongoose');
const newSchema = require('../schemas/DocProxyTypeA');
const CustomError = require('../errors/customError');
const ScreenImage = require('./ScreenImage');

newSchema.statics.getAll = async function ({ user }) {
  const doc = await this.find({ user: user._id }).populate('screens');
  if (!doc) throw new CustomError('Error get docs list', 500);
  return doc;
};

newSchema.statics.getOne = async function ({ params: { id } }) {
  const doc = await this.findById(id).populate('screens');
  if (!doc) throw new CustomError('Document not found', 404);
  return doc;
};

newSchema.statics.createOne = async function ({ user, body: { representative } }) {
  const doc = await this.create({
    representative,
    user: user._id,
    access: [user._id],
  });
  if (!doc) throw new CustomError('Document not create', 500);
  return doc;
};

newSchema.statics.uploadScreens = async function ({ params: { id }, files, user }) {
  const document = await this.findById(id);
  if (!document) throw new CustomError('Document not found', 404);

  for (const [key, screenArr] of Object.entries(files)) {
    for (const el of screenArr) {
      const result = await ScreenImage.create({
        type: key,
        destination: el.destination,
        filename: el.filename,
        path: el.path,
        access: [user._id], // todo set users array
      });
      document.screens.push(result._id);
    }
  }
  try {
    await document.save();
  } catch (e) {
    throw new CustomError(e.message, 500);
  }
  return document;
};

// todo create own route and controller
newSchema.statics.getScreenInRootDocument = async function ({ params: { img } }) {
  const document = await this.findOne({
    'screens.filename': img,
  });

  if (!document) throw new CustomError('Doc with img not found', 404);

  return document.screens.find((el) => el.filename === img);
};

newSchema.statics.sendToCheck = async function ({ params: { id } }) {
  const data = this.findOneAndUpdate(
    { _id: id },
    { sendToCheck: true },
    { new: true },
  );
  return data;
};

module.exports = mongoose.model('DocProxyTypeA', newSchema);
