// const models = require('./models');
const {db, veggieTable, gardenerTable, plotTable} = require('./models');

db.sync({force: true})
.then(() => {
  console.log('Connected');
})
// .catch((err) => {
//   console.log(err);
// });
// .finally(() => {
//   models.close();
// });

veggieTable.create(
  {
    name: 'carrot',
    color: 'orange',
    planted_on: '2018-06-18'
  }
)
.then(() => {
  return
})
.catch((error) => {
  console.log(error);
});
