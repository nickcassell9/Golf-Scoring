exports.up = function(knex, Promise) {

    return knex.schema.createTable('users', function(table){

        table.increments('user_id').primary();
        table.string('first_name', 255).notNullable();
        table.string('last_name', 255).notNullable();
        table.string('email',255).notNullable();
        table.string('password', 255).notNullable();
        table.float('handicap').nullable().defaultTo(null);
    })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
