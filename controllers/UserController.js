const db = require('../models');

module.exports = {

  createUser: function(req, res) {
    db.User
    .create(req.body)
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },

  populate: function(req, res) {
   db.User
  .findOne({_id: req.params.id})
  .populate({
    path: 'exercises',
    populate: {
      path: 'exerciseDetails'
    }
  })
  .then(dbResults => res.json(dbResults))
  .catch(err => res.status(404).json(err));
},


}
