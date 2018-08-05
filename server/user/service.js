const crypto = require('crypto')
const userDb = require('./db');


module.exports = {

    createUser,
    saltHashPassword,
    authenticate

};

function createUser(email, password, first_name, last_name, callback){
    const {salt, hash} = saltHashPassword(password);

    let data = {email, encrypted_password: hash, first_name, last_name, salt};

    return userDb.createUser(data, callback)

}

function authenticate(email, password, callback){

    console.log(`Authenticating user ${email}`);
    return knex('users').where({ email })
        .then((user) => {

            if (!user) {
                return callback(new Error('No User Found'));
            }

            const { hash } = saltHashPassword(password, user.salt);

            return callback(null, hash === user.encrypted_password)
        }).catch((err)=>{
            return callback(err)
        })
}


function saltHashPassword (password, salt = randomString()) {
    const hash = crypto
        .createHmac('sha512', salt)
        .update(password)
    return {
        salt,
        hash: hash.digest('hex')
    }
}
function randomString () {
    return crypto.randomBytes(4).toString('hex')
}