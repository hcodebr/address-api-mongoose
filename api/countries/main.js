const env = require('./../../env');
const Country = require('./../../models/Country');
const State = require('./../../models/State');
const City = require('./../../models/City');

module.exports = (server) => {

    server.get(`/${env.collection.countries}`, (req, res, next) => {

        Country.find(
            {},
            (err, docs) => (err) ? env.resError(res, err) : res.send(docs)
        );

    });

    server.get(`/${env.collection.countries}/:id`, (req, res, next) => {

        Country.findById(
            req.params.id,
            (err, doc) => (err) ? env.resError(res, err) : res.send(doc)
        );

    });

    server.post(`/${env.collection.countries}`, (req, res, next) => {

        Country.create({
            name: req.body.name,
            code: req.body.code,
            phone_code: req.body.phone_code
        }, (err, doc) => (err) ? env.resError(res, err) : res.send(doc));

    });

    server.patch(`/${env.collection.countries}/:id`, (req, res, next) => {

        Country.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                code: req.body.code,
                phone_code: req.body.phone_code
            },
            (err, doc) => (err) ? env.resError(res, err) : res.send(doc));

    });

    server.del(`/${env.collection.countries}/:id`, (req, res, next) => {

        Country.findByIdAndDelete(
            req.params.id,
            (err, doc) => (err) ? env.resError(res, err) : res.send(doc)
        );

    });

    server.get(`/${env.collection.countries}/:code/${env.collection.states}`, (req, res, next) => {

        State.find(
            {
                country: req.params.code
            },
            (err, doc) => (err) ? env.resError(res, err) : res.send(doc)
        ).sort('name');

    });

    server.get(`/${env.collection.countries}/:code/${env.collection.states}/:initials/${env.collection.cities}`, (req, res, next) => {

        City.find(
            {
                country: req.params.code,
                state: req.params.initials,
            },
            (err, doc) => (err) ? env.resError(res, err) : res.send(doc)
        ).sort('name');

    });

    return server;

};