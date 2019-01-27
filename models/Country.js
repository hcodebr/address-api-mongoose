module.exports = require('./../inc/mongoose').model('Country', { 
    name: String,
    code: String,
    phone_code: String
});