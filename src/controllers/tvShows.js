const { Episode, Season, TvShow, Employee } = require('../models');

async function getSerie(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({});
  }

  const serie = await TvShow.findOne({
    where: {
      id,
    },
    include: [{ model: Season, include: [{ model: Episode }] }, Employee],
  });

  if (!serie) {
    return res.status(404).json({ data: [] });
  }

  return res.status(200).json({ data: serie });
}

module.exports = {
  getSerie,
};
