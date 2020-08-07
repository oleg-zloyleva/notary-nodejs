const assert = require('assert').strict;
const { Representative, fieldTypes } = require('../helpers/constants');

module.exports = {
  up: (models) => models.fieldType.bulkWrite([
    {
      insertOne: {
        document: {
          name: 'passport_proxy',
          description: 'Паспорт доверителя. Физ лицо',
          count: 10,
          requirements: Representative.INDIVIDUAL,
          type: fieldTypes.SCREEN,
        },
      },
    },
    {
      insertOne: {
        document: {
          name: 'inn_proxy',
          description: 'ИНН доверителя. Физ лицо',
          count: 1,
          requirements: Representative.INDIVIDUAL,
          type: fieldTypes.SCREEN,
        },
      },
    },
    {
      insertOne: {
        document: {
          name: 'registration_entity',
          description: 'Cвидетельство о государственной регистрации. Юр лицо',
          count: 2,
          requirements: Representative.ENTITY,
          type: fieldTypes.SCREEN,
        },
      },
    },
    {
      insertOne: {
        document: {
          name: 'charter_entity',
          description: 'Устав. Юр лицо',
          count: 30,
          requirements: Representative.ENTITY,
          type: fieldTypes.SCREEN,
        },
      },
    },
    {
      insertOne: {
        document: {
          name: 'EGRPOU_entity',
          description: 'Выписка из ЕГРПОУ. Юр лицо',
          count: 30,
          requirements: Representative.ENTITY,
          type: fieldTypes.SCREEN,
        },
      },
    },
    {
      insertOne: {
        document: {
          name: 'protocol_entity',
          description: 'Протокол об избрании руководителя',
          count: 2,
          requirements: Representative.ENTITY,
          type: fieldTypes.SCREEN,
        },
      },
    },
    {
      insertOne: {
        document: {
          name: 'representative_proxy',
          description: 'Нотариально удостоверенную доверенность для представителя',
          count: 5,
          requirements: Representative.ENTITY,
          type: fieldTypes.SCREEN,
        },
      },
    },
    {
      insertOne: {
        document: {
          name: 'representative_passport',
          description: 'Паспорт представителя',
          count: 10,
          requirements: Representative.ENTITY,
          type: fieldTypes.SCREEN,
        },
      },
    },
    {
      insertOne: {
        document: {
          name: 'representative_passport',
          description: 'Паспорт представителя',
          count: 10,
          requirements: Representative.ENTITY,
          type: fieldTypes.SCREEN,
        },
      },
    },
  ]).then((res) => {
    // Prints "1"
    console.log(res.insertedCount);
  }),

  down: (models) => models.fieldType.remove({}, (err) => assert.equal(null, err)),
};
