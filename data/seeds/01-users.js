exports.seed = function(knex) {
  return knex('users').insert([
    { username: 'James', email: 'james@test.com', password: 'jamesmurphy', role: 'instructor' }, 
    { username: 'Hannah', email: 'hannah@test.com', password: 'hannahmurphy', role: 'attendeee' },
    { username: 'ron', email: 'ron@test.com', password: 'ronhowatt', role: 'attendee' },
    { username: 'ruslan', email: 'ruslan@test.com', password: 'ruslanmurphy', role: 'instructor' },
    { username: 'murph', email: 'murph@test.com', password: 'murphrobinson', role: 'attendee' },
    { username: 'liam', email: 'liam@test.com', password: 'liamwashbur', role: 'instructor' },
    { username: 'Mo', email: 'Mo@test.com', password: 'Moanguiano', role: 'attendee' },
    { username: 'Silver', email: 'Silver@test.com', password: 'Silvergarnett', role: 'instructor' },
    { username: 'nana', email: 'nana@test.com', password: 'nanaroche', role: 'attendee' },
    { username: 'John', email: 'johnwick@test.com', password: 'johnwick', role: 'instructor' }
  ]);
};
