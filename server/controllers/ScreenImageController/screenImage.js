const fileSystem = require('fs');
const path = require('path');
const mime = require('mime');
const ScreenImage = require('../../models/ScreenImage');
const CustomError = require('../../errors/customError');

const findOne = async (req, res, next) => {
  try {
    // find img
    const data = await ScreenImage.getOne(req);

    // check permission
    if (!data.access.includes(req.user._id)) return next(new CustomError('Forbidden', 403));

    // resolve file || not found 404
    const filePath = path.resolve(data.path);
    const stat = fileSystem.statSync(filePath);
    const mimeType = mime.getType(filePath);

    // return data
    res.writeHead(200, {
      'Content-Type': mimeType,
      'Content-Length': stat.size,
    });
    const readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(res);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  findOne,
};
