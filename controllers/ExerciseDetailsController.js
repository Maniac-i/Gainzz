const db = require("../models");

module.exports = {

  create: function(req, res) {
    db.ExerciseDetails
    .create(req.body)
    .then(({ _id }) => db.Exercise.findOneAndUpdate({}, { $push: { exerciseDetails: _id }}, {new: true }))
    .then(dbExercies => {
      res.json(dbExercies);
    })
    .catch(err => {
      res.json(err);
    });
  },

  update: function(req, res) {
    db.ExerciseDetails
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },

  findAll: function(req, res) {
    db.ExerciseDetails
    .find()
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  }
}