const assert = require('assert').strict;
const { docTypes } = require('../helpers/constants');

module.exports = {
  up: (models) => models.docsList.bulkWrite([
    {
      insertOne: {
        document: {
          title: 'Доверенность на право быть представителем в каких- либо учреждениях, предприятиях, организациях',
          description: '-',
          requirements: 'Предварительный список документов для создания этого документа:\n'
            + '* Доверитель физическое лицо:\n'
            + '- паспорт\n'
            + 'фото (до 10 снимков)\n'
            + '- справка о присвоении идентификационного номера.\n'
            + 'фото (1 снимок)\n'
            + '* Доверитель юридическое лицо:\n'
            + '- свидетельство о государственной регистрации,\n'
            + 'фото (до 2 снимков)\n'
            + '- устав,\n'
            + 'фото (до 30 снимков)\n'
            + '- выписку из ЕГРПОУ,\n'
            + 'фото (до 2 снимков)\n'
            + '- протокол об избрании руководителя,\n'
            + 'фото (до 2 снимков)\n'
            + '* В случае, если от имени юридического лица действует представитель по доверенности:\n'
            + '- нотариально удостоверенную доверенность,\n'
            + 'фото (до 5 снимков)\n'
            + '- паспорт представителя,\n'
            + 'фото (до 10 снимков)\n'
            + '- печать юридического лица.\n'
            + 'текстовое поле для ввода идентификационного кода печати',
          code: docTypes.a,
        },
      },
    },
    {
      insertOne: {
        document: {
          title: 'Договор купли-продажи недвижимого имущества',
          description: '-',
          requirements: '-',
          code: docTypes.b,
        },
      },
    },
    {
      insertOne: {
        document: {
          title: 'Доверенность на управление и распоряжение транспортным средством',
          description: '-',
          requirements: '-',
          code: docTypes.c,
        },
      },
    },
    {
      insertOne: {
        document: {
          title: 'Доверенность на распоряжение недвижимостью',
          description: '-',
          requirements: '-',
          code: docTypes.d,
        },
      },
    },
    {
      insertOne: {
        document: {
          title: 'Документ доверенности удостоверенной в порядке передоверия',
          description: '-',
          requirements: '-',
          code: docTypes.e,
        },
      },
    },
    {
      insertOne: {
        document: {
          title: 'Документ завещания',
          description: '-',
          requirements: '-',
          code: docTypes.f,
        },
      },
    },
    {
      insertOne: {
        document: {
          title: 'Документ дарения недвижимости',
          description: '-',
          requirements: '-',
          code: docTypes.g,
        },
      },
    },
    {
      insertOne: {
        document: {
          title: 'Документ договора ипотеки',
          description: '-',
          requirements: '-',
          code: docTypes.h,
        },
      },
    },
  ]).then((res) => {
    // Prints "1"
    console.log(res.insertedCount);
  }),

  down: (models) => models.docsList.remove({}, (err) => assert.equal(null, err)),
};
