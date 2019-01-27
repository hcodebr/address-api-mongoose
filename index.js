const restify = require('restify');
const env = require('./env');
const fs = require('fs');

var server = restify.createServer(env.server);

server.use(restify.plugins.bodyParser({
    mapParams: true
}));

server.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
});

fs.readdir(`./${env.apiDir}`, (err, directories) => {

    directories.forEach(directory => server = require(`./${env.apiDir}/${directory}/main.js`)(server));

});

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});