
// exports.seed = function(knex, Promise) {

//     return knex('classes')
//       .truncate()
//       .then(function() {
//         return knex('classes').insert([
//           { Name: 'Cardio Showdown', Type: 'Cardio', Start_Time: new Date(), Duration: 1, Intensity_level: `Hard`, Location: `San Francisco Downtown`, Current_Number_Of_Registered_Attendees: 5, Max_Class_Size: 55 },
//           { Name: 'TRX Pump', Type: 'TRX', Start_Time: new Date(), Duration: 1.5, Intensity_level: `Easy`, Location: `LA Downtown`, Current_Number_Of_Registered_Attendees: 2, Max_Class_Size: 15 },
//           { Name: 'Begginer Boxing Class', Type: 'Boxing', Start_Time: new Date(), Duration: 2, Intensity_level: `Medium`, Location: `Chicago Downtown`, Current_Number_Of_Registered_Attendees: 33, Max_Class_Size: 100 },
//           { Name: 'Marathod on the Hill', Type: 'Sprint', Start_Time: new Date(), Duration: 2.5, Intensity_level: `Hard`, Location: `Latvia Downtown`, Current_Number_Of_Registered_Attendees: 14, Max_Class_Size: 42 },
//         ]);
//       });
//   };
  
//   .createTable("instructors", (instructor) => {
//     instructor.increments("instructor_id");
//     instructor.string("Name", 32).notNullable().unique()
//     instructor.string("Type", 32).notNullable()
//     instructor.date("Start_Time", 32).notNullable()
//     instructor.integer("Duration", 32).notNullable()
//     instructor.string("Intensity_level", 32).notNullable()
//     instructor.string("Location", 32).notNullable()
//     instructor
//       .integer("Current_Number_Of_Registered_Attendees", 32)
//       .notNullable()
//     instructor.integer("Max_Class_Size", 32).notNullable()
//   })
 
// DO NOT CHANGE THIS FILE
exports.seed = async function (knex) {
  await knex('classes').truncate()
  await knex('clients').truncate()
  await knex('classes').insert([
    { Name: 'Cardio Showdown', Type: 'Cardio', Start_Time: new Date(), Duration: 1, Intensity_level: `Hard`, Location: `San Francisco Downtown`, Current_Number_Of_Registered_Attendees: 5, Max_Class_Size: 55 },
    { Name: 'TRX Pump', Type: 'TRX', Start_Time: new Date(), Duration: 1.5, Intensity_level: `Easy`, Location: `LA Downtown`, Current_Number_Of_Registered_Attendees: 2, Max_Class_Size: 15 },
    { Name: 'Begginer Boxing Class', Type: 'Boxing', Start_Time: new Date(), Duration: 2, Intensity_level: `Medium`, Location: `Chicago Downtown`, Current_Number_Of_Registered_Attendees: 33, Max_Class_Size: 100 },
    { Name: 'Marathod on the Hill', Type: 'Sprint', Start_Time: new Date(), Duration: 2.5, Intensity_level: `Hard`, Location: `Latvia Downtown`, Current_Number_Of_Registered_Attendees: 14, Max_Class_Size: 42 },
  ]);
  await knex('clients').insert([
    {
      username: 'bob',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
      Name: 'Bobby Brown',
      Class: 4,
    },
    {
      username: 'sue',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
      Name: 'Suzzie Hummings',
      Class: 2,
    },
  ])
}

// client.increments("client_id");
// client.string('username').notNullable().unique()
// client.string('password').notNullable().unique()
// client.string("Name", 32).notNullable().unique()
// client.string("Class", 32).unique().unsigned()
//   .references('class_id')
//   .inTable('classes')
//   .onUpdate('RESTRICT')
//   .onDelete('RESTRICT')