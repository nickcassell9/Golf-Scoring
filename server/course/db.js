const Db = require('server/core/db');

const tableName = 'courses';

module.exports = {
    createCourse,
}

function createCourse(data, callback){

    console.log('data', data);

    if(!data.name){
        return callback(new Error('Invalid name'))
    }

    if(!data.address){
        return callback(new Error('Invalid address'))
    }

    if(!data.par){
        return callback(new Error('Invalid par'))
    }

    data.par = parseInt(data.par)


    return Db.insert(tableName, data, callback);


}