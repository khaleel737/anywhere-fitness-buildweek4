const router = require("express").Router();
const Classes = require("./classes-model");
const { restricted, only } = require("../auth/auth-middleware.js");

router.get('/', async (req, res, next) => {
 const allClasses = await Classes.getAll();
 res.status(200).json(allClasses)
})

// /**
//   [GET] /api/users

//   This endpoint is RESTRICTED: only authenticated clients
//   should have access.

//   response:
//   status 200
//   [
//     {
//       "user_id": 1,
//       "username": "bob"
//     }
//   ]
//  */
// router.get("/", restricted, (req, res, next) => { // done for you
//   Users.find()
//     .then(users => {
//       res.status(200).json(users);
//     })
//     .catch(next);
// });

// /**
//   [GET] /api/users/:user_id

//   This endpoint is RESTRICTED: only authenticated users with role 'admin'
//   should have access.

//   response:
//   status 200
//   [
//     {
//       "user_id": 1,
//       "username": "bob"
//     }
//   ]
//  */
// router.get("/:user_id", restricted, only('admin'), (req, res, next) => { // done for you
//   Users.findById(req.params.user_id)
//     .then(user => {
//       res.status(200).json(user);
//     })
//     .catch(next);
// });

module.exports = router;