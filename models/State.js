module.exports = require('./../inc/mongoose').model('State', { 
    name: String,
    country: String,
    initials: String
});