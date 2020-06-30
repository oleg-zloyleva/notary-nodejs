
exports.Role = Object.freeze({
    ADMIN: 'admin',
    USER: 'user',
    NOTARY: 'notary',
});

exports.Representative = Object.freeze({
    INDIVIDUAL: 'individual',
    ENTITY: 'entity',
});

exports.DocProxyTypeAFields = Object.freeze({
    individual: ['passport','inn'],
    entity: ['registration','charter','EGRPOU','protocol','proxy','proxyPassport','sealId'],
});