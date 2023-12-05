const router = require('express').Router();
const userRoutes = require('./user-routes');
const emailRoutes = require('./email-routes'); 

router.use('/users', userRoutes);
router.use('/email', emailRoutes);

module.exports = router;
