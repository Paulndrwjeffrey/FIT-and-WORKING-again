const router = require('express').Router();
const db = require('../models/workout.js')

// ROUTES

router.get('/api/workouts', (req, res) => {
  db.workout.find()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
});

module.exports = router;