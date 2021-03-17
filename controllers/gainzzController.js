const db = require("../models");

module.exports = {
  
  findById: function(req, res) {
    db.Gainzz
    .findById(req.params.id)
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },

  create: function(req, res) {
    db.Gainzz
    .create(req.body)
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },

  update: function(req, res) {
    db.Gainzz
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },
}