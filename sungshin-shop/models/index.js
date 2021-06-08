const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./user')(sequelize, Sequelize);
db.goods = require('./goods')(sequelize, Sequelize);
db.order = require('./order')(sequelize, Sequelize);

/** N : M user : goods */
db.user.belongsToMany(db.goods, { through: 'ORDER', as: 'Ordered', foreignKey: 'userId' });
db.goods.belongsToMany(db.user, { through: 'ORDER', as: 'Orderer', foreignKey: 'goodsId' });

module.exports = db;