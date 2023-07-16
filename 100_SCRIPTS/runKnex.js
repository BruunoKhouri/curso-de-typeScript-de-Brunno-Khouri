const knex = require('knex');
const path = require('path');

// Configuração do Knex
const config = {
  client: 'pg',
  connection: '',
};

const knexInstance = knex(config);

// Função para limpar as tabelas antes de executar os seeds
async function truncateTables() {
  try {
    // Lista das tabelas que deseja limpar
    const tables = ['cities'];

    for (const table of tables) {
      await knexInstance.raw(`TRUNCATE TABLE ${table} CASCADE`);
      console.log(`Tabela ${table} foi limpa.`);
    }
  } catch (error) {
    console.error('Erro ao limpar as tabelas:', error);
    knexInstance.destroy();
    process.exit(1); // Encerrar o script em caso de erro
  }
}

// Caminho para o diretório de seeds
const seedPath = path.join(__dirname, 'seeds');

// Executar o truncate antes dos seeds
truncateTables()
  .then(() => {
    // Executar os seeds após o truncate
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
