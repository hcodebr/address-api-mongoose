module.exports = {
    apiDir: 'api',
    server: {
        name: 'Address API'
    },
    collection: {
        countries: 'countries',
        states: 'states',
        cities: 'cities'
    },
    mongo: {
        host: 'localhost',
        port: '27017',
        db: 'addressAPI'
    },
    resError: (res, err, code) => {
        res.status(code || 400);
        res.send(err);
    }
};