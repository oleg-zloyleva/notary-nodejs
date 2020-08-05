const CustomError = require('../errors/customError');
const ScreenImage = require('../models/ScreenImage');

const getAll = async function ({ user }, docType) {
  const doc = await this.find({ user: user._id, docType }).populate('screens');
  if (!doc) throw new CustomError('Error get docs list', 500);
  return doc;
};

const getOne = async function ({ params: { id } }, docType) {
  const doc = await this.findOne({ _id: id, docType }).populate('screens');
  if (!doc) throw new CustomError('Document not found', 404);
  return doc;
};

const createOne = async function ({ user, body: { representative } }, docType) {
  const doc = await this.create({
    representative,
    user: user._id,
    access: [user._id],
    docType,
  });
  if (!doc) throw new CustomError('Document not create', 500);
  return doc;
};

const uploadScreens = async function ({ params: { id }, files, user }, docType) {
  const document = await this.findOne({ _id: id, docType }).populate('screens');
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

const fs = require('fs');
const removeScreenHandler = (screen) => {
  const removeFileAndDBRow = async () => {
    if (fs.existsSync(screen.path)) {
      // remove screen file
      fs.unlinkSync(screen.path);
    } else {
      console.log("File doesn't exist"); // todo Logged
    }
    // remove screen data from Doc: Screen
    await ScreenImage.deleteOne({ _id: screen._id });
  };
  removeFileAndDBRow();
  return false;
};

const removeScreen = async function ({ params: { id }, body: { screens }, user }, docType) {
  try {
    // find doc
    const document = await this.findOne({ _id: id, docType }).populate('screens');
    // check permission
    if (!document.access.includes(user._id)) throw new CustomError('Forbidden for remove file', 403);
    // find screen for remove in doc other screens -> save
    const newScreensArr = document.screens.filter(
      (el) => (!screens.includes(String(el._id)) ? true : removeScreenHandler(el)),
    );
    // update screens relations
    await document.depopulate('screens');
    document.screens = newScreensArr;
    await document.save();

    return document;
  } catch (e) {
    throw new CustomError(e.message, 500);
  }
};

const sendToCheck = async function ({ params: { id } }, docType) {
  return this.findOneAndUpdate(
    { _id: id, docType },
    { sendToCheck: true },
    { new: true },
  );
};

module.exports = {
  getAll,
  getOne,
  createOne,
  uploadScreens,
  removeScreen,
  sendToCheck,
};
