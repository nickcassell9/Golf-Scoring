const courseDb = require('server/course/db');
module.exports = {

    createCourse

}

function createCourse(data, callback){
    return courseDb.createCourse(data, callback);
}