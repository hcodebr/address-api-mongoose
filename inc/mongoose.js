const mongoose = require('mongoose');
const env = require('./../env');

mongoose.connect(`mongodb://${env.mongo.host}:${env.mongo.port}/${env.mongo.db}`, { useNewUrlParser: true });

module.exports = mongoose;