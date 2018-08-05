const Db = require('server/core/db');

const tableName = 'users';

module.exports = {
    createUser,
}

function createUser(data, callback){

    console.log('data', data);

    if(!data.email){
        return callback(new Error('Invalid email'))
    }

    if(!data.first_name){
        return callback(new Error('Invalid first name'))
    }

    if(!data.last_name){
        return callback(new Error('Invalid last name'))
    }

    if(!data.salt){
        return callback(new Error('Invalid salt'))
    }

    if(!data.encrypted_password){
        return callback(new Error('Invalid password'))
    }

    if(!data.first_name){
        return callback(new Error('Invalid first name'))
    }


    return Db.insert(tableName, data, callback);


}