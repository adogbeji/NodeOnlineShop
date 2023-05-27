const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_course_1', 'root', 'mysqlroot_1993', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
