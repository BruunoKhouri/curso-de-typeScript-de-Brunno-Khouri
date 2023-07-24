exports.up = function(knex) {
  return knex.schema.createTable('countries', function(table) {
    table.increments('id').primary().notNullable();
    table.string('name').notNullable();
    table.string('iso3').notNullable();
    table.string('iso2').notNullable();
    table.integer('numeric_code').notNullable();
    table.string('phone_code').notNullable();
    table.string('capital').notNullable();
    table.string('currency').notNullable();
    table.string('currency_name').notNullable();
    table.string('currency_symbol').notNullable();
    table.string('tld').notNullable();
    table.string('native').notNullable();
    table.string('region').notNullable();
    table.string('subregion').notNullable();
    table.string('timezones').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('emoji').notNullable();
    table.string('emojiU').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  })
  .then(() => {
    console.log('Tabela "countries" criada com sucesso!');
    return knex.raw(`
      ALTER TABLE countries ALTER COLUMN created_at SET DEFAULT (now() at time zone 'utc');
      ALTER TABLE ONLY public.countries ADD CONSTRAINT countries_id_unique_constraint UNIQUE (id);
    `);
  })
  .then(() => {
    console.log('Consultas SQL executadas com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao criar a tabela "countries" e executar as consultas SQL:', error);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('countries')
  .then(() => {
    console.log('Tabela "countries" removida com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao remover a tabela "countries":', error);
  });
};
