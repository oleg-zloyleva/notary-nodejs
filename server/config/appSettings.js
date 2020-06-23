module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.API_PORT || 3000,
    apiPrefix: process.env.PATH_PREFIX || '',
    bcryptSalt: Number(process.env.BCRYPT_SALT) || 10,
    jwtSalt: process.env.JWT_KEY || 'salt',
    expiresIn: process.env.EXPIRE_TOKEN_SEC || 600,

    db_host: process.env.MONGO_HOST || 'localhost',
    db_name: process.env.MONGO_DATABASE || 'mongodb',
    db_user: process.env.MONGO_USER || 'root',
    db_pass: process.env.MONGO_PASSWORD || '123456789',
};