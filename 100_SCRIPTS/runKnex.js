const knex = require('knex');
const path = require('path');

// Configuração do Knex
const config = {
  client: 'pg',
  connection: 'postgres://postgres:test@localhost/notro?sslmode=disable',
};

const knexInstance = knex(config);

async function truncateTables() {
  try {
    
    const tables = ['countries','states', 'cities'];

    for (const table of tables) {
      await knexInstance.raw(`TRUNCATE TABLE ${table} CASCADE`);
      console.log(`Tabela ${table} foi limpa.`);
    }
  } catch (error) {
    console.error('Erro ao limpar as tabelas:', error);
    knexInstance.destroy();
    process.exit(1); 
  }
}


const seedPath = path.join(__dirname, 'seeds');


truncateTables()
  .then(() => {
   
    return knexInstance.seed.run({ directory: seedPath });
  })
  .then(() => {
    console.log('Seeds executados com sucesso!');
    knexInstance.destroy();
  })
  .catch((error) => {
    console.error('Erro ao executar os seeds:', error);
    knexInstance.destroy();
  });
