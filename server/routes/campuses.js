const api = require('express').Router()
const { Campus } = require('../../db/models')
const { Student } = require('../../db/models')

api.get('/', (req, res, next) => {
  Campus.findAll({ include: [{ all: true }] })
    .then(students => {
      res.json(students);
    })
    .catch(next);
})

api.get('/:id', (req, res, next) => {
  const campusId = req.params.id;
	Campus.findOne({
		include: [{ model: Student }],
		where: {
			id: campusId
		}
	})
	.then(campus => {
		res.json(campus)
	})
	.catch(next)
})

api.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next)
})

api.put('/:id', (req, res, next) => {
  let campusId = Number(req.params.id);
  Campus.findById(campusId)
  .then(campus => {
    campus.update(req.body)
  })
  .catch(next)
})

api.delete('/:id', (req, res, next) => {
  let campusId = Number(req.params.id);
  Campus.findById(campusId)
  .then(campus => {
    campus.destroy()
  })
  .catch(next)
})

api.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('There was an Express error.')
})

module.exports = api;
