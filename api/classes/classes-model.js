const db = require('../../data/dbConfig');

module.exports = {
  getClasses,
  getClassById,
  addClass,
  updateClass,
  deleteClass,
  getClassByUserId,
  addClassByUserId
};

function getClasses() {
  return db('classes').orderBy('classes.id');
}

function getClassById(id) {
  return db('classes')
    .where('id', id)
    .first();
}

function addClass(activity) {
  return db('classes')
    .insert(activity, 'id')
    .then(ids => {
      console.log(ids);
      return getClassById(ids[0]);
    });
}


function updateClass(id, changes) {
  return db('classes')
    .where({ id })
    .update(changes)
    .then(() => getClassById(id))
}


function deleteClass(id) {
  return db('classes')
    .where({ id })
    .del();
}

function getClassByUserId(userid) {
  return db('classes as c')
    .join('attendees as a', 'c.id', 'a.class_id')
    .join('users as u', 'u.id', 'a.user_id')
    .select('c.class_name', 'u.username', 'c.class_city', 'c.start_time', 'class_duration', 'u.id as user_id', 'class_date')
    .where('u.id', userid);
}

function addClassByUserId(userid, classid){
   return db('attendees').insert(userid)
   .where('attendess.user_id').insert(classid)
   .where('attendees.class_id').select('attendess.class_id')
}