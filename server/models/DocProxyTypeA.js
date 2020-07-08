'use strict';
const mongoose = require('mongoose');
const newSchema = require('../schemas/DocProxyTypeA');
const CustomError = require('../errors/customError');
const { Representative,DocProxyTypeAFields } = require('../helpers/constants');

newSchema.statics.getAll = async function({user}) {
    const doc = await this.find({user: user._id});
    if (!doc) throw new CustomError('Error get docs list', 500);
    return doc;
};

newSchema.statics.getOne = async function({params: {id}}) {
    const doc = await this.findById(id);
    if (!doc) throw new CustomError('Document not found', 404);
    return doc;
};

newSchema.statics.createOne = async function({user,body: {representative}}) {
    const doc = await this.create({
        representative,
        user: user._id,
        access: [user._id],
    });
    if (!doc) throw new CustomError('Document not create', 500);
    return doc;
};

newSchema.statics.uploadScreens = async function({params: {id}, files, user}) {
    const document = await this.findById(id);
    if (!document) throw new CustomError('Document not found', 404);

    const fields = (document.representative === Representative.INDIVIDUAL)
        ? DocProxyTypeAFields[Representative.INDIVIDUAL]
        : DocProxyTypeAFields[Representative.ENTITY];

    fields.map(doc => {
        files[doc].map( async el => {

            document[doc].push({
                destination: el.destination,
                filename: el.filename,
                path: el.path,
                access: [user._id], // todo set users array
            });
        });
    });
    document.save();

    return document;
};

module.exports = mongoose.model('DocProxyTypeA', newSchema);
