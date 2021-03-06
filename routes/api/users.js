const express = require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { User } = require('../../models');
router.use(cors());

process.env.SECRET_KEY = 'secret';

router.post('/tutor', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    profile: req.body.profile,
    grade: req.body.grade,
    subject: req.body.subject

  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.status(200).json({ message: 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err);
            })
        })
      } else {
        res.status(409).json({ message: 'User already exists' });
      }
    })
    .catch(err => {
      res.send('error: ' + err);
    })
})




router.post('/student', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    profile: req.body.profile,
    grade: req.body.grade,
    subject: req.body.subject

  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.status(200).json({ message: 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err);
            })
        })
      } else {
        res.status(409).json({ message: 'User already exists' });
      }
    })
    .catch(err => {
      res.send('error: ' + err);
    })
})

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        res.status(400).json({ message: 'User does not exist' })
      } else if (bcrypt.compareSync(req.body.password, user.password)) {
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.send(token)
      }
      else {
        res.status(400).json({ message: 'Password was incorrect' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Something went wrong' });

    })
})

router.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.send('User does not exist');
      }
    })
    .catch(err => {
      res.send('error: ' + err);
    })
})

module.exports = router;