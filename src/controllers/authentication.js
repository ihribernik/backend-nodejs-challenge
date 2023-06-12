const bcrypt = require('bcrypt');
const { encodeToken } = require('../utils/token');
const { User } = require('../models');
const dotenv = require('dotenv');
dotenv.config();
const { IS_REQUIRED, LOGIN_ERROR } = require('../constants');

async function signIn(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: IS_REQUIRED });
  }

  try {
    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: LOGIN_ERROR });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({ error: LOGIN_ERROR });
    }

    const userCred = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };

    const token = encodeToken(
      { userCred },
      parseInt(process.env.EXPIRE_TOKEN),
      process.env.SECRET_TOKEN
    );
    const refreshToken = encodeToken(
      { userCred },
      parseInt(process.env.EXPIRE_REFRESH_TOKEN),
      process.env.SECRET_REFRESH_TOKEN
    );

    return res.status(200).json({ token, refreshToken });
  } catch (error) {
    return res.status(500).json({ message: error.message, stack: error.stack });
  }
}

async function refreshToken(req, res) {
  try {
    const token = encodeToken(
      req.user,
      parseInt(process.env.EXPIRE_TOKEN),
      process.env.SECRET_TOKEN
    );
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message, stack: error.stack });
  }
}

module.exports = {
  signIn,
  refreshToken,
};
