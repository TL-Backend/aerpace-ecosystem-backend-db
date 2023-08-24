const { sequelize } = require('../databases/postgresql/models');
require('dotenv').config();

const dbHealthCheck = async () => {
  try {
    console.log(process.env.NODE_ENV);
    await sequelize
      .authenticate()
      .then(() => {
        console.log('connection healthy');
      })
      .catch((err) => {
        console.log('Connection failed due to', err);
      });
  } catch (err) {
    console.log('Error found -->', err);
  }
};

dbHealthCheck();
