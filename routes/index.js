const apiRoutes = require('./api');
const router = require('express').Router();
const path = require('path');

router.use('/api', apiRoutes);

//sends the React app if no API routes are used
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;