const db = require("../models");

module.exports = {

  populate: function(req, res) {
    db.Exercise
      .find({})
      .populate("exercises")
  },
}