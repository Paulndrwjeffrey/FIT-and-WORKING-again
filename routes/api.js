const router = require('express').Router();
const db = require('../models')

// ROUTES

router.get('/api/workouts', (req, res) => {
  db.Workout.find()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
});

router.post('/api/workouts', (req, res) => {
  db.Workout.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
});

router.put('/api/workouts/:id', (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body }})
      .then(data => res.json(data))
      .catch(error => res.status(500).json(error));
});

router.get('/api/workouts/range', (req, res) => {
  db.Workout.find()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
});

module.exports = router;