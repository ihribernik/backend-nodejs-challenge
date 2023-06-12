const { getSerie } = require('../controllers/tvShows');
const express = require('express');
const router = express.Router();
const { isAuth } = require('../middlewares/isAuth');

router.get('/:id', [isAuth, getSerie]);

module.exports = router;
