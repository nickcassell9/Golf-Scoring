'use strict';

const
    userRoutes = require('server/user/routes'),
    courseRoutes = require('server/course/routes');

function init(server) {
    server.get('*', function (req, res, next) {
        console.log('Request was made to: ' + req.originalUrl);
        return next();
    });

    server.get('/', function (req, res) {
        res.redirect('/home');
    });


    server.use('/user', userRoutes);
    server.use('/course', courseRoutes);
}

module.exports = {
    init: init
};