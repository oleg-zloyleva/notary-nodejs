
exports.Role = Object.freeze({
  ADMIN: 'admin',
  USER: 'user',
  NOTARY: 'notary',
});

exports.Representative = Object.freeze({
  INDIVIDUAL: 'individual',
  ENTITY: 'entity',
});

// /** INDIVIDUAL - Доверитель физическое лицо */
// passport: [ScreenImage], //10
// inn: [ScreenImage], //1
// /** ENTITY - Доверитель юридическое лицо */
// registration: [ScreenImage], //2 - свидетельство о государственной регистрации,
// charter: [ScreenImage], //30 - устав,
// EGRPOU: [ScreenImage], //2 - выписку из ЕГРПОУ,
// protocol: [ScreenImage], //2 - протокол об избрании руководителя,
// /** В случае, если от имени юридического лица действует представитель по доверенности */
// proxy: [ScreenImage], //5 - нотариально удостоверенную доверенность,
// proxyPassport: [ScreenImage], //10 - паспорт представителя,

exports.DocProxyTypeATypes = Object.freeze({
  list: ['passport', 'inn', 'registration', 'charter', 'EGRPOU', 'protocol', 'proxy', 'proxyPassport'],
});
