exports.up = function(knex, Promise) {

    return knex.schema.createTable('tees', function(table){

        table.increments('tee_id').primary();
        table.integer('course_id', 255).notNullable();
        table.integer('length').notNullable();
        table.string('tee_color', 255).notNullable();
        table.float('slope').nullable().defaultTo(null);
        table.float('rating').nullable().defaultTo(null);
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tees')
};
