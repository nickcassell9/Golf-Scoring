module.exports = {

    createUser

}

function createUser(username, password, callback){

    console.log(`Add ${username} as a user or somethin`)
    return callback(null, 'Yay!');
}