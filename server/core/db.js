const knex = require('knex')(require('../../knexfile'));

module.exports = {
    insert
}

function insert(tableName, data, callback){

    if(!tableName){
        return callback(new Error('Invalid table name'))
    }

    if(!data){
        return callback(new Error('Invalid data'))
    }

    knex(tableName).insert(data).then((response)=>{
        console.log('r', response)
        return callback(null,response)
    }).catch((err)=>{
        console.log('er', err)
        return callback(err)

    })

}