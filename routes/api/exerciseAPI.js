const router = require("express").Router();
const exerciseController = require("../../controllers/ExerciseController");

router.route('/')
  .post(exerciseController.create)

  module.exports = router;