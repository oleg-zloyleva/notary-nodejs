exports.Role = Object.freeze({
  ADMIN: 'admin',
  USER: 'user',
  NOTARY: 'notary',
});

exports.Representative = Object.freeze({
  INDIVIDUAL: 'individual',
  ENTITY: 'entity',
});

// Type A
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


// Type B
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
//
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Разница
//
// eslint-disable-next-line max-len
// purchaseAgreement // 30 - протокол органа управления о согласии на заключение договора купли-продажи земельного участка
// ownershipLand // 5 - Государственный акт о праве собственности на земельный участок
// eslint-disable-next-line max-len
// certificateNoRestrictions // 5 - Справка об отсутствии ограничений (обременений) по данным Государственного земельного кадастра
// eslint-disable-next-line max-len
// conclusionMonetaryValue // 5 - Заключение об экспертной денежной оценке земельного участка, который отчуждается
// eslint-disable-next-line max-len
// certificateAbsenceBuildings // 5 - Справка об отсутствии строений на отчуждаемой земельном участке (если отчуждается земельный участок свободен от строений)
// eslint-disable-next-line max-len
// permissionFromGuardianship // 5 -Разрешение органа опеки и попечительства, если право собственности или право пользования отчуждаемым имуществом принадлежит малолетним или несовершеннолетним лицам или приобретается малолетними или несовершеннолетними лицами
// marriageCertificate // 5 -Свидетельство о браке ++++++
// eslint-disable-next-line max-len
// spouseConsent // 5 - , если отчуждается имущество приобретено во время зарегистрированного брака или если имущество приобретается при зарегистрированного брака за денежные средства, общей совместной собственностью супругов, подлинность подписи на которой засвидетельствовано в нотариальном порядке
// eslint-disable-next-line max-len
// incomeTaxReceipt // 5 - квитанция Продавцом налога с доходов физических лиц от продажи недвижимого имущества

exports.DocTypes = Object.freeze({
  list: [
    'passport', 'inn', 'registration', 'charter', 'EGRPOU', 'protocol', 'proxy', 'proxyPassport',
    'purchaseAgreement', 'certificateNoRestrictions', 'permissionFromGuardianship', 'marriageCertificate', 'spouseConsent', 'incomeTaxReceipt',
    'mainProxy',
  ],
});
