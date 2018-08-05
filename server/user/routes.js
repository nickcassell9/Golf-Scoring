'use strict';

const
    express = require('express'),
    userController = require('./controller');

let router = express.Router();

router.post('/', userController.createUser);
router.post('/login', userController.authenticate);

module.exports = router;