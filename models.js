const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/plantr');

const gardenerTable = db.define('gardener', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const plotTable = db.define('plot', {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN
});

const veggieTable = db.define('vegetable', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE
});

veggieTable.belongsToMany(plotTable, {through: 'vegetable_plot'});
plotTable.belongsToMany(veggieTable, {through: 'vegetable_plot'});

gardenerTable.belongsTo(veggieTable, {as: 'favorite_vegetable'});

module.exports = {db, veggieTable, gardenerTable, plotTable};

// module.exports = db;
// module.exports = veggieTable;
// module.exports = gardenerTable;
// module.exports = plotTable;
