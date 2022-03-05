const db = require('../../data/dbConfig');

module.exports = {
  getUsers,
  getUserById,
  findBy,
  addUser,
  updateUser,
  deleteUser
};

function getUsers() {
  return db('users');
}

function getUserById(id) {
  return db('users')
    .where('id', id)
    .first();
}

function findBy(user) {
  return db('users')
    .where('username', user)
    .first();
}

function addUser(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      // console.log(ids);
      return getUserById(ids[0]);
    });
}


function updateUser(id, changes) {
  return db('users')
    .where({ id })
    .update(changes)
    .then(() => getUserById(id))
}

function deleteUser(id) {
  return db('users')
    .where({ id })
    .del();
}
