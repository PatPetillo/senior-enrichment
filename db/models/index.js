'use strict';
const db = require('../');
const Student = require('./student');
const Campus = require('./campus')


Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = { Student, Campus, db }
