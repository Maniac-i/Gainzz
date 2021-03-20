const router = require('express').Router();
const userRoutes = require('./userAPI');
const exerciseRoutes = require('./exerciseAPI');
const exerciseDetailsRoutes = require('./exerciseDetailsAPI');

router.use('/user', userRoutes);
router.use('/exercise', exerciseRoutes);
router.use('/exerciserDetails', exerciseDetailsRoutes);

module.exports = router;