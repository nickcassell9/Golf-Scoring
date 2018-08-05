exports.up = function(knex, Promise) {

    return knex.schema.createTable('courses', function(table){

        table.increments('course_id').primary();
        table.string('name', 255).notNullable();
        table.string('address',255).notNullable();
        table.integer('par').notNullable();
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('courses')
};
