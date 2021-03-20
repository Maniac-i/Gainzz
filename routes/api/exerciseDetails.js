const router = require("express").Router();
const exerciseDetailsController = require("../../controllers/ExerciseDetailsController");

router.route('/')
  .post(exerciseDetailsController.create)
  .get(exerciseDetailsController.findAll)
  
  router.route(':id')
  .update(exerciseDetailsController.update)
  .delete(exerciseDetailsController.delete)

  router.route('/user/:userId')

  module.exports = router;