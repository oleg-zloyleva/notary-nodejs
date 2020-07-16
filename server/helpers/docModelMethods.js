const CustomError = require('../errors/customError');
const ScreenImage = require('../models/ScreenImage');

const getAll = async function ({ user }) {
  const doc = await this.find({ user: user._id }).populate('screens');
  if (!doc) throw new CustomError('Error get docs list', 500);
  return doc;
};

const getOne = async function ({ params: { id } }) {
  const doc = await this.findById(id).populate('screens');
  if (!doc) throw new CustomError('Document not found', 404);
  return doc;
};

const createOne = async function ({ user, body: { representative } }) {
  const doc = await this.create({
    representative,
    user: user._id,
    access: [user._id],
  });
  if (!doc) throw new CustomError('Document not create', 500);
  return doc;
};

const uploadScreens = async function ({ params: { id }, files, user }) {
  const document = await this.findById(id).populate('screens');
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
    const result = await document.save();
    return result;
  } catch (e) {
    throw new CustomError(e.message, 500);
  }
};

const sendToCheck = async function ({ params: { id } }) {
  return this.findOneAndUpdate(
    { _id: id },
    { sendToCheck: true },
    { new: true },
  );
};

module.exports = {
  getAll,
  getOne,
  createOne,
  uploadScreens,
  sendToCheck,
};
