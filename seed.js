// const models = require('./models');
const {db, veggieTable, gardenerTable, plotTable} = require('./models');

db.sync({force: true})
.then(() => {
  console.log('Connected');
  return veggieTable.create(
    {
      name: 'carrot',
      color: 'orange',
      planted_on: '2018-06-18'
    }
  );
})
.then(() => {
  db.close();
})
.catch((error) => {
  console.log(error);
});
