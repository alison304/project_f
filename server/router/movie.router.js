const express = require('express');
const { getMovieList, getOneMovie, createMovie, updateMovie, removeMovie} = require("../controllers/movie.controller");
const router = express.Router();

router.get('/', getMovieList);
router.get('/:id', getOneMovie);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', removeMovie);

module.exports.movieRouter = router;