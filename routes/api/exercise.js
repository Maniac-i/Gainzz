const router = require("express").Router();
const exerciseController = require("../../controllers/ExerciseController");

router.route('/all')
  .post(exerciseController.create)
  .get(exerciseController.findAll);

  router.route('/all/:id')
  .put(exerciseController.update)
  .delete(exerciseController.delete);

  router.route('/user/:userId')
  .get(exerciseController.findAllByUserId)

  module.exports = router;