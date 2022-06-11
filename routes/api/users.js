const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');


router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
// router.use(require('../../config/auth'))
router.post('/update/:id', usersCtrl.update);

module.exports = router;