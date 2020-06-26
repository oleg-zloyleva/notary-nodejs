'use strict';
const mongoose = require('mongoose');
const ScreenImage = require('../schemas/ScreenImage');
const { Representative } = require('../helpers/constants');

const newSchema = new mongoose.Schema({
  representative: {
    type: String,
    enum: Object.values(Representative),
    required: true,
  },
  number: {
    type: String
  },

  /** INDIVIDUAL - Доверитель физическое лицо */
  passport: [ScreenImage], //10
  inn: [ScreenImage], //1
  /** ENTITY - Доверитель юридическое лицо */
  registration: [ScreenImage], //2 - свидетельство о государственной регистрации,
  charter: [ScreenImage], //30 - устав,
  EGRPOU: [ScreenImage], //2 - выписку из ЕГРПОУ,
  protocol: [ScreenImage], //2 - протокол об избрании руководителя,
  /** В случае, если от имени юридического лица действует представитель по доверенности */
  proxy: [ScreenImage], //5 - нотариально удостоверенную доверенность,
  proxyPassport: [ScreenImage], //10 - паспорт представителя,
  sealId: {
    type: String
  }, //10 - печать юридического лица.

  user: { // relation to user
    type: mongoose.ObjectId
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
module.exports = mongoose.model('DocProxyTypeA', newSchema);
