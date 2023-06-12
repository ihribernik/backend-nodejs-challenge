const {
  getMovies,
  getMovie,
  addMovie,
  deleteMovie,
  updateMovie,
} = require('../controllers/movies.js');
const express = require('express');
const router = express.Router();
const { isAuth } = require('../middlewares/isAuth');

router.get('/', [isAuth, getMovies]);
router.get('/:id', [isAuth, getMovie]);
router.post('/', [isAuth, addMovie]);
router.delete('/:id', [isAuth, deleteMovie]);
router.patch('/:id', [isAuth, updateMovie]);

module.exports = router;
