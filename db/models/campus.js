'use strict';

const db = require('../');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: './campuses/fullstack.jpg'
  }
})

module.exports = Campus;
