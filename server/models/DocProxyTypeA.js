
const mongoose = require('mongoose');
const newSchema = require('../schemas/DocProxyTypeA');
const CustomError = require('../errors/customError');

newSchema.statics.getAll = async function ({ user }) {
  const doc = await this.find({ user: user._id });
  if (!doc) throw new CustomError('Error get docs list', 500);
  return doc;
};

newSchema.statics.getOne = async function ({ params: { id } }) {
  const doc = await this.findById(id);
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
    screenArr.map((el) => {
      document.screens.push({
        type: key,
        destination: el.destination,
        filename: el.filename,
        path: el.path,
        access: [user._id], // todo set users array
      });
    });
  }
  // throw new CustomError('err.message',500)
  try {
    await document.save();
    // .catch(err => {
    //     console.log("CATCH >>>>>>>>>", err)
    //     throw new CustomError('+++++', 500)
    // });
  } catch (e) {
    console.log('EEEEEEEEEEEEEEEEE', e);
    // throw new
  }
  return document;
};

newSchema.statics.getScreenInRootDocument = async function ({ params: { img } }) {
  const document = await this.findOne({
    'screens.filename': img,
  });

  if (!document) throw new CustomError('Doc with img not found', 404);

  return document.screens.find((el) => el.filename === img);
};

module.exports = mongoose.model('DocProxyTypeA', newSchema);
