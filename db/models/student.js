'use strict';
const db = require('../');
const Sequelize = require('sequelize');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
})

module.exports = Student;
