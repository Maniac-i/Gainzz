const router = require('express').Router();
const gainzzRoutes = require('./gainzz');

router.use('/gainzz', gainzzRoutes);

module.exports = router;