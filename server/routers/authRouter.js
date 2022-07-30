const express = require('express');

const router = express.Router();
const { User } = require('../db/models');
const Bcrypt = require('../utils/bcrypt');

router.get('/auth', async (req, res) => {
  try {
    const result = await User.findByPk(req.session.userId);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('cook');
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.post('/register', async (req, res) => {
  try {
    const {
      email, password, name,
    } = req.body;
    const result = await User.create({
      email, password: await Bcrypt.hash(password), name,
    });
    if (result.id) {
      req.session.userName = result.name;
      req.session.userId = result.id;
      return res.json(result);
    }
    throw Error(result);
  } catch (error) {
    return res.json(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log('in login');
    const { email, password } = req.body;
    const result = await User.findOne({ where: { email } });
    if (await Bcrypt.compare(password, result.password)) {
      req.session.userName = result.name;
      req.session.userId = result.id;
      req.session.save(() => res.json(result));
      console.log('---', req.session);
    }
  } catch (error) {
    console.log('ERROR', error.message);
  }
});

module.exports = router;
