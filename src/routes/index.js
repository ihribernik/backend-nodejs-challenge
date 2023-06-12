const express = require('express');
const moviesRouter = require('./movies');
const tvShowsRouter = require('./tvShows');
const authRouter = require('./authentication');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/tvShows', tvShowsRouter);
router.use('/movie', moviesRouter);

module.exports = router;
