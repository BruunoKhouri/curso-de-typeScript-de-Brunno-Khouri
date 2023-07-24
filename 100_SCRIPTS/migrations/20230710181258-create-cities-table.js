'use strict';

exports.up = async function(knex) {
  await knex.schema.createTable('cities', function(table) {
    table.increments('id').primary().notNullable();
    table.string('name').notNullable();
    table
      .integer('state_id')
      .notNullable()
      .references('id')
      .inTable('states')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    table.string('state_code').notNullable();
    table.string('state_name').notNullable();
    table
      .integer('country_id')
      .notNullable()
      .references('id')
      .inTable('countries')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    table.string('country_code').notNullable();
    table.string('country_name').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('wikiDataId').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  })
  .then(() => {
    return knex.raw(` ALTER TABLE states ALTER COLUMN created_at SET DEFAULT (now() at time zone 'utc');`);
  });


};

exports.down = async function(knex) {
  await knex.schema.dropTable('cities');
};
