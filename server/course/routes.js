'use strict';

const
    express = require('express'),
    courseController = require('./controller');

let router = express.Router();

router.post('/', courseController.createCourse);

module.exports = router;