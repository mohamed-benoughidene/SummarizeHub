const express =require('express');
const router = express.Router();
const {logIn, signUp} = require('../Controllers/userController')
router.post('/login', logIn);
router.post('/signup', signUp);

module.exports = router;