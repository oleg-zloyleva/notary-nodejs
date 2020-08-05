const docTypeModel = require('../models/docType');

class DocTypesController {
  constructor(docType) {
    this.docType = docType;
    this.getAllItems = this.findAll.bind(this);
    this.findOneItem = this.findOne.bind(this);
    this.createOneItem = this.createOne.bind(this);
    this.uploadScreensForItem = this.uploadScreens.bind(this);
    this.removeScreenForItem = this.removeScreen.bind(this);
    this.sendToCheckItem = this.sendToCheck.bind(this);
  }

  async findAll(req, res, next) {
    try {
      const data = await docTypeModel.getAll(req, this.docType);
      return res.json({ data });
    } catch (e) {
      return next(e);
    }
  }

  async findOne(req, res, next) {
    try {
      const data = await docTypeModel.getOne(req, this.docType);
      return res.json({ data });
    } catch (e) {
      return next(e);
    }
  }

  async createOne(req, res, next) {
    try {
      const data = await docTypeModel.createOne(req, this.docType);
      return res.json({ data });
    } catch (e) {
      return next(e);
    }
  }

  async uploadScreens(req, res, next) {
    try {
      const document = await docTypeModel.uploadScreens(req, this.docType);
      return res.json({
        data: document,
      });
    } catch (e) {
      return next(e);
    }
  }

  async removeScreen(req, res, next) {
    try {
      const document = await docTypeModel.removeScreen(req, this.docType);
      return res.json({
        data: document,
      });
    } catch (e) {
      return next(e);
    }
  }

  async sendToCheck(req, res, next) {
    try {
      const data = await docTypeModel.sendToCheck(req, this.docType);
      return res.json({ data });
    } catch (e) {
      return next(e);
    }
  }
}

const getDocTypeController = (docType) => new DocTypesController(docType);

module.exports = getDocTypeController;
