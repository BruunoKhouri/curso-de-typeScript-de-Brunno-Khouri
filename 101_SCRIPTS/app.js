const fs = require('fs');

const seedData = require('./001-countries.js');

seedData.forEach((data) => {
  const query = {
    text: 'INSERT INTO countries (id, name, iso3, iso2, numeric_code, phone_code, capital, currency, currency_name, currency_symbol, tld, native, region, subregion, timezones, latitude, longitude, emoji, emojiU, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, now())',
    values: [
      data.id,
      data.name,
      data.iso3,
      data.iso2,
      data.numeric_code,
      data.phone_code,
      data.capital,
      data.currency,
      data.currency_name,
      data.currency_symbol,
      data.tld,
      data.native,
      data.region,
      data.subregion,
      data.timezones,
      data.latitude,
      data.longitude,
      data.emoji,
      data.emojiU
    ],
  };

  db.query(query)
    .then(() => {
      console.log('Item adicionado ao banco de dados:', data);
    })
    .catch((error) => {
      console.error('Erro ao adicionar item ao banco de dados:', error);
    });
});

console.log('Leitura do arquivo de seed concluída.');
