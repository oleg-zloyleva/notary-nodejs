module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.API_PORT || 3000,
    db_name: process.env.MONGO_DATABASE || 'mongodb',
    db_user: process.env.MONGO_USER || 'root',
    db_pass: process.env.MONGO_PASSWORD || '123456789',
};