const fs = require('fs');
const csv = require('csv-parser');

function generateSeedFunction(data, tableName) {
  let seedFunction = `exports.seed = async (knex) => {\n`;

  seedFunction += `  await knex('${tableName}').insert([\n`;

  for (const item of data) {
    const formattedItem = {

      id: parseInt(item.id),
      name: item.name.toString(),
      country_id: parseInt(item.country_id),
      country_code: item.country_code.toString(),
      country_name: item.country_name.toString(),
      state_code: item.state_code.toString(),
      type: item.type.toString() || '',
      latitude: parseFloat(item.latitude),
      longitude: parseFloat(item.longitude),
      created_at: new Date().toISOString()

    };

    seedFunction += `    {\n`;
    for (const key in formattedItem) {
      const value = formattedItem[key];
      if (typeof value === 'string') {
        seedFunction += `      ${key}: "${value}",\n`;
      } else {
        seedFunction += `      ${key}: ${value},\n`;
      }
    }
    seedFunction += `    },\n`;
  }

  seedFunction += `  ]);\n`;

  seedFunction += `};\n`;

  return seedFunction;
}

function convertCSVtoSeed(inputFile, tableName, outputFile) {
  const data = [];

  fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
      data.push(row);
    })
    .on('end', () => {
      const seedFunction = generateSeedFunction(data, tableName);

      fs.writeFile(outputFile, seedFunction, (err) => {
        if (err) {
          console.error('Erro ao gravar o arquivo:', err);
          return;
        }
        console.log(`Arquivo gerado com sucesso: ${outputFile}`);
      });
    });
}

const inputFile = 'states.csv'; // Substitua pelo caminho e nome do arquivo CSV de entrada
const tableName = 'states'; // Substitua pelo nome da tabela correspondente
const outputFile = 'seeds/002-states.js'; // Nome do arquivo de saída

convertCSVtoSeed(inputFile, tableName, outputFile);