const router = require("express").Router();
const exerciseDetailsController = require("../../controllers/ExerciseDetailsController");

router.route('/')
  .post(exerciseDetailsController.create)

  module.exports = router;