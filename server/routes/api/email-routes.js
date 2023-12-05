const router = require('express').Router();
const emailController = require('./email-controller'); // Update the path accordingly

router.route('/verify/:userId').put(emailController.verifyEmail);

module.exports = router;