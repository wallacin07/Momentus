// seed.js
'use strict';

const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const { Sequelize } = require('sequelize');

// Carrega configuração do Sequelize (mesma lógica do index.js)
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, 'config', 'config.json'))[env];
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Importa modelos dinamicamente
const db = {};
fs.readdirSync(path.join(__dirname, 'models'))
  .filter(file => file.endsWith('.js') && file !== path.basename(__filename))
  .forEach(file => {
    const model = require(path.join(__dirname, 'models', file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Executa associações
Object.keys(db).forEach(modelName => {
  if (typeof db[modelName].associate === 'function') {
    db[modelName].associate(db);
  }
});

async function seed() {
  // Sincroniza todas as tabelas (force: true dropa tabelas existentes)
  await sequelize.sync({ force: true });

  // Lê dados do mock.json dentro de /config
  const mockPath = path.join(__dirname, 'config', 'mock.json');
  const raw = await fs.readFile(mockPath, 'utf-8');
  const data = JSON.parse(raw);

  // Insere registros conforme as chaves do JSON
  for (const [collection, records] of Object.entries(data)) {
    const Model = db[collection];
    if (!Model) continue;
    for (const record of records) {
      await Model.create(record);
    }
  }

  console.log('Database seeded with config/mock.json data');
  await sequelize.close();
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});