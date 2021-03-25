const router = require('express').Router();
const userRoutes = require('./user');
const exerciseRoutes = require('./exercise');
const exerciseDetailsRoutes = require('./exerciseDetails');
const userController = require('../../controllers/UserController');

router.use('/user', userRoutes);
router.use('/exercise', exerciseRoutes);
router.use('/exercisedetails', exerciseDetailsRoutes);

module.exports = router;