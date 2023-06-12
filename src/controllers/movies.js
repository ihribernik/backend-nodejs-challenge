const { Movie, Employee } = require('../models');

async function addMovie(req, res) {
  const { title, releaseDate, actors, director } = req.body;

  if (!title || !releaseDate || !actors || !director) {
    return res.status(400).json({});
  }

  const movie = await Movie.create({
    title,
    releaseDate,
    Employees: [...actors, director],
  });

  if (!movie) {
    return res.status(500).json({});
  }
  return res.status(200).json({ movie });
}

async function deleteMovie(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({});
  }

  const movie = await Movie.findOne({
    where: {
      id,
    },
    include: [Employee],
  });

  if (!movie) {
    return res.status(404).json();
  }

  const result = movie.destroy();
  return res.status(200).json({ data: result });
}

async function getMovie(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({});
  }

  const movie = await Movie.findOne({ where: { id } }, { include: [Employee] });

  if (!movie) {
    return res.status(404).json({ data: {} });
  }
  return res.status(200).json({ data: movie });
}

async function getMovies(req, res) {
  const movies = await Movie.findAll({}, { include: [Employee] });

  return res.status(200).json({ data: movies });
}

async function updateMovie(req, res) {
  const { title, releaseDate, actors, director } = req.body;
  const { id } = req.params;

  if (!title || !releaseDate || !actors || !director || !id) {
    return res.status(400).json({});
  }

  const movie = await Movie.findOne({ where: { id } }, { include: [Employee] });

  if (!movie) {
    return res.status(404).json({ data: {} });
  }
  const result = movie.update(
    {
      title,
      releaseDate,
      Employees: [...actors, director],
    },
    {
      where: {
        id,
      },
    }
  );
  if (!result) {
    return res.status(400).json({});
  }
  return res.status(200).json({ data: result });
}

module.exports = {
  addMovie,
  deleteMovie,
  getMovie,
  getMovies,
  updateMovie,
};
