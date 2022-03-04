const router = require("express").Router();
const Clients = require("./clients-model");
const { restricted, only } = require("../auth/auth-middleware.js");

/**
  [GET] /api/users

  This endpoint is RESTRICTED: only authenticated clients
  should have access.

  response:
  status 200
  [
    {
      "user_id": 1,
      "username": "bob"
    }
  ]
 */
router.get('/', (req, res, next) => {
  Clients.getAll().then(client => {
    res.status(200).json(client)
  })
})

router.get("/", restricted, (req, res, next) => { // done for you
  Clients.find()
    .then(client => {
      res.status(200).json(client);
    })
    .catch(next);
});

/**
  [GET] /api/users/:user_id

  This endpoint is RESTRICTED: only authenticated users with role 'admin'
  should have access.

  response:
  status 200
  [
    {
      "user_id": 1,
      "username": "bob"
    }
  ]
 */
router.get("/:user_id", restricted, (req, res, next) => { // done for you
  Clients.findById(req.params.instructor_id)
    .then(client => {
      res.status(200).json(client);
    })
    .catch(next);
});

module.exports = router;
