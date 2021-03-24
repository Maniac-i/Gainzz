const db = require("../models");

module.exports = {

  populate: function(req, res) {
    db.Exercise
      .find({_id: req.params.id})
      .populate("exerciseDetails")
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(404).json(err));
  },

  create: function(req, res) {
    db.Exercise
      .create(req.body)
      .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { exercises: _id }}, {new: true }))
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(404).json(err));
  },

  findAll: function(req, res) {
    db.Exercise
    .find()
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },

  findAllByUserId: function(req, res) {
    db.Exercise
    .find({ userId: req.params.userId })
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },

  update: function(req, res) {
    db.Exercise
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },

  delete: function(req, res) {
    db.Exercise
    .findByIdAndDelete(req.params.id)
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  }
}