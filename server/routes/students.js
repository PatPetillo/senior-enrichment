const api = require('express').Router();
const { Student } = require('../../db/models');
const { Campus } = require('../../db/models');

api.get('/', (req, res, next) => {
  Student.findAll({ include: [{ all: true }] })
    .then((students) => {
      res.json(students);
    })
    .catch(next);
});

api.get('/:id', (req, res, next) => {
  const studentId = req.params.id;
  Student.findOne({
    include: [{ model: Campus }],
    where: {
      id: studentId,
    },
  })
    .then((campus) => {
      res.json(campus);
    })
    .catch(next);
});

api.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => Student.findOne({
      include: [{ model: Campus }],
      where: {
        id: student.id,
      },
    }))
    .then(student => res.json(student))
    .catch(next);
});

api.put('/:id', (req, res, next) => {
  const id = req.params.id;
  Student.findById(id)
    .then(studentToupdate => studentToupdate.update(req.body))
    .then(updatedStudent => Student.findOne({
      include: [{ model: Campus }],
      where: {
        id: updatedStudent.id,
      },
    })
      .then((eagerStudent) => {
        res.json(eagerStudent);
      }))
    .catch(next);
});

api.delete('/:id', (req, res, next) => {
  const studentId = Number(req.params.id);
  Student.findById(studentId)
    .then((student) => {
      student.destroy();
    })
    .catch(next);
});

api.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('There was an Express error.');
});

module.exports = api;
