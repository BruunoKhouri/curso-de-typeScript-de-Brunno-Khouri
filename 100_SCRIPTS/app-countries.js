const fs = require('fs');
const csv = require('csv-parser');

function generateSeedFunction(data, tableName) {
  let seedFunction = `exports.seed = async (knex) => {\n`;

  seedFunction += `  await knex('${tableName}').insert([\n`;

  for (const item of data) {
    const formattedItem = {
    
      id: parseInt(item.id),
      name: item.name.toString(),
      iso3: item.iso3.toString(),
      iso2: item.iso2.toString(),
      numeric_code: parseInt(item.numeric_code),
      phone_code: item.phone_code.toString(),
      capital: item.capital.toString(),
      currency: item.currency.toString(),
      currency_name: item.currency_name.toString(),
      currency_symbol: item.currency_symbol.toString(),
      tld: item.tld.toString(),
      native: item.native.toString(),
      region: item.region.toString(),
      subregion: item.subregion.toString(),
      timezones: item.timezones.toString(),
      latitude: parseFloat(item.latitude),
      longitude: parseFloat(item.longitude),
      emoji: item.emoji.toString(),
      emojiU: item.emojiU.toString(),
      created_at: new Date().toISOString(),

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

const inputFile = 'countries.csv'; // Substitua pelo caminho e nome do arquivo CSV de entrada
const tableName = 'countries'; // Substitua pelo nome da tabela correspondente
const outputFile = 'seeds/001-countries.js'; // Nome do arquivo de saída

convertCSVtoSeed(inputFile, tableName, outputFile);