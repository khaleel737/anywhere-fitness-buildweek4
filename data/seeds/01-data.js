
exports.seed = function(knex, Promise) {

    return knex('instructors')
      .truncate()
      .then(function() {
        return knex('instructors').insert([
          { Name: 'Jennifer Aubrey', Type: 'Cardio', Start_Time: new Date(), Duration: 1, Intensity_level: `Hard`, Location: `San Francisco Downtown`, Current_Number_Of_Registered_Attendees: 5, Max_Class_Size: 55 },
          { Name: 'Mo Momodu', Type: 'TRX', Start_Time: new Date(), Duration: 1.5, Intensity_level: `Easy`, Location: `LA Downtown`, Current_Number_Of_Registered_Attendees: 2, Max_Class_Size: 15 },
          { Name: 'Khabib Kebabi', Type: 'Boxing', Start_Time: new Date(), Duration: 2, Intensity_level: `Medium`, Location: `Chicago Downtown`, Current_Number_Of_Registered_Attendees: 33, Max_Class_Size: 100 },
          { Name: 'Olga Mariopanina', Type: 'Sprint', Start_Time: new Date(), Duration: 2.5, Intensity_level: `Hard`, Location: `Latvia Downtown`, Current_Number_Of_Registered_Attendees: 14, Max_Class_Size: 42 },
        ]);
      });
  };
  
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
 