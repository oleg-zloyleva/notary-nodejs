const MongoClient = require('mongodb').MongoClient;
const state = {
    db: null
};

exports.connect = (url, done) => {
    if (state.db) return done();

    MongoClient.connect(url, {auth: {user:'root', password: '123456789mongodb'}},(err, db) => {
        if (err) return done(err);
        state.db = db;
        done();
    })
};

exports.get = () => state.db;

exports.close = done => {
    if (state.db) {
        state.db.close((err, result) => {
            state.db = null;
            state.mode = null;
            done(err);
        })
    }
};