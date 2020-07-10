const DocProxyTypeA = require('../../models/DocProxyTypeA');

const findAll = async (req, res, next) => {
  try {
    const data = await DocProxyTypeA.getAll(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const findOne = async (req, res, next) => {
  try {
    const data = await DocProxyTypeA.getOne(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const createOne = async (req, res, next) => {
  try {
    const data = await DocProxyTypeA.createOne(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const uploadScreens = async (req, res, next) => {
  try {
    const document = await DocProxyTypeA.uploadScreens(req);
    return res.json({
      data: document,
    });
  } catch (e) {
    next(e);
  }
};

const CustomError = require('../../errors/customError');
const fileSystem = require('fs');
const path = require('path');
const mime = require('mime');

const uploads = async (req, res, next) => {
  try {
    const screen = await DocProxyTypeA.getScreenInRootDocument(req);

    const filePath = path.resolve(screen.path);
    const stat = fileSystem.statSync(filePath);
    const mimeType = mime.getType(filePath);

    res.writeHead(200, {
      'Content-Type': mimeType,
      'Content-Length': stat.size,
    });

    const readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(res);
  } catch (e) {
    next(new CustomError('File not found', 404));
  }
};

const sendToCheck = async (req, res, next) => {
  try {
    const data = await DocProxyTypeA.sendToCheck(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  findAll,
  findOne,
  createOne,
  uploadScreens,
  uploads,
  sendToCheck,
};
