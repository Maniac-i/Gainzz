const router = require("express").Router();
const userController = require("../../controllers/UserController");

router.route('/')
  .post(userController.createUser)
  .get(userController.find);

router.route('/:id')
  .get(userController.populateExercises)
  // .get(userController.findById)
  // .put(userController.update);

  module.exports = router;