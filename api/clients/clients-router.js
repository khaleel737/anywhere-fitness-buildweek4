const express = require('express');
const Users = require('./clients-model');
const restricted = require('../auth/restricted-middleware');
const router = express.Router();


router.get('/', (req, res) => {
  //add logic here
  Users.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.log('inside getUsers error', error);
      res.status(500).json({ message: 'Sorry, no users returned from the server', error });
    });
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;

  Users.getUserById(userId)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ message: 'Sorry, user with that id not found' });
      }
    })
    .catch(error => {
      console.log('inside getUserById error', error);
      res.status(500).json({ message: 'Sorry, no user with that id returned from the server', error });
    });
});


router.put('/:id', (req, res) => {
  Users.updateUser(req.params.id, req.body)
    .then(user => {
      console.log(req.body);
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: ' something went wrong in the server' });
    });
});


router.delete('/:id', (req, res) => {
  const deletedId = req.params.id;

  Users.deleteUser(deletedId)
    .then(user => {
      res.status(200).json(`id ${deletedId} was deleted`);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'error with the server' });
    });
});

module.exports = router;
