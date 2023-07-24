
exports.up = function(knex) {
  return knex.schema.createTable('states', function(table) {
  table.increments('id').primary().notNullable();
  table.string('name').notNullable();
  table
  .integer('country_id')
  .notNullable()
  .references('id')
  .inTable('countries')
  .withKeyName('countries_id_country_id_fk')
  .onDelete('RESTRICT');
  table.string('country_code').notNullable();
  table.string('country_name').notNullable();
  table.string('state_code').notNullable();
  table.string('type').notNullable();
  table.decimal('latitude').notNullable();
  table.decimal('longitude').notNullable();
  table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  })
  .then(() => {
  console.log('Tabela "states" criada com sucesso!');
  return knex.raw(` 
   ALTER TABLE states ALTER COLUMN created_at SET DEFAULT (now() at time zone 'utc');
   ALTER TABLE ONLY public.states ADD CONSTRAINT states_id_unique_constraint UNIQUE (id);
    `);
  })
  .then(() => {
  console.log('Consultas SQL executadas com sucesso!');
  })
  .catch((error) => {
  console.error('Erro ao criar a tabela "states" e executar as consultas SQL:', error);
  });
  };
  
  exports.down = function(knex) {
  return knex.schema.dropTableIfExists('states')
  .then(() => {
  console.log('Tabela "states" removida com sucesso!');
  })
  .catch((error) => {
  console.error('Erro ao remover a tabela "states":', error);
  });
  };