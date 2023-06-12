const { decodeToken } = require('../utils/token.js');
const { User } = require('../models');

async function isAuth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: 'You must signIn' });

  try {
    const validateToken = decodeToken(token, process.env.SECRET_TOKEN);

    const whereClausule = {
      email: validateToken?.userCred?.email,
      firstName: validateToken?.userCred?.firstName,
      lastName: validateToken?.userCred?.lastName,
      password: validateToken?.userCred?.password,
    };
    const user = await User.findOne({
      where: whereClausule,
    });

    if (!user) {
      return res.status(401);
    }

    const userCred = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };

    req.user = userCred;
    req.payload = validateToken;
    next();
  } catch (error) {
    if (error.name && error.name.includes('Token'))
      return res.status(401).json({ error });

    next(error);
  }
}

async function validRefreshToken(req, res, next) {
  const refreshToken = req.headers.authorization;

  if (!refreshToken) return res.status(401).json({ error: 'You must signIn' });

  try {
    const validateToken = decodeToken(
      refreshToken,
      process.env.SECRET_REFRESH_TOKEN
    );

    const whereClausule = {
      email: validateToken?.userCred?.email,
      firstName: validateToken?.userCred?.firstName,
      lastName: validateToken?.userCred?.lastName,
      password: validateToken?.userCred?.password,
    };

    const user = await User.findOne({ where: whereClausule });

    if (!user) return res.status(401);

    const userCred = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };

    req.user = userCred;
    req.payload = validateToken;
    next();
  } catch (error) {
    if (error.name && error.name.includes('Token'))
      return res.status(401).json({ error });

    next(error);
  }
}

module.exports = {
  isAuth,
  validRefreshToken,
};
