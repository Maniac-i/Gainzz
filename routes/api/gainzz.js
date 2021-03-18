const router = require("express").Router();
const gainzzController = require("../../controllers/gainzzController");

router.route('/')
  .post(gainzzController.create);

router.route('/id')
  .get(gainzzController.findById)
  .put(gainzzController.update);

  module.exports = router;