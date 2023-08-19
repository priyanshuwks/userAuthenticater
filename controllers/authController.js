const router = require('express').Router();
const signupController = require('./signupController');
const signinController = require('./signController');

router.post('/signup', signupController);
router.get('/signin', signinController);

module.exports = router;