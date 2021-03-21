const router = require("express").Router();
const exerciseDetailsController = require("../../controllers/ExerciseDetailsController");

router.route('/')
  .post(exerciseDetailsController.create)
  .get(exerciseDetailsController.findAll);
  
router.route('/:id')
  .put(exerciseDetailsController.update)
  .delete(exerciseDetailsController.delete);

router.route('/user/:userId')
  .get(exerciseDetailsController.findAllByUserId)

  module.exports = router;