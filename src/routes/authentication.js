const express = require('express');
const router = express.Router();
const { signIn, refreshToken } = require('../controllers/authentication');
const { validRefreshToken } = require('../middlewares/isAuth');

router.post('/signIn', signIn);
router.post('/refresh', [validRefreshToken, refreshToken]);

module.exports = router;
