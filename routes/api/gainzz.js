const router = require("express").Router();
const gainzzController = require("../../controllers/gainzzController");

router.route('/')
  .post(gainzzController.create)
  .get(gainzzController.findAll);

router.route('/:id')
  .get(gainzzController.findById)
  .put(gainzzController.update);

  module.exports = router;