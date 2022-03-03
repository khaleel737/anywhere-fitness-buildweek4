exports.up = function (knex) {
  return knex.schema
    .createTable("instructors", (instructor) => {
      instructor.increments("instructor_id");
      instructor.string("Name", 32).notNullable().unique()
      instructor.string("Type", 32).notNullable()
      instructor.date("Start_Time", 32).notNullable()
      instructor.integer("Duration", 32).notNullable()
      instructor.string("Intensity_level", 32).notNullable()
      instructor.string("Location", 32).notNullable()
      instructor
        .integer("Current_Number_Of_Registered_Attendees", 32)
        .notNullable()
      instructor.integer("Max_Class_Size", 32).notNullable()
    })
   
      //   .unsigned()
      //   .notNullable()
      //   .references('role_id')
      //   .inTable('roles')
      //   .onUpdate('RESTRICT')
      //   .onDelete('RESTRICT')
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("instructors");
};

//   4. Authenticated `Instructor` can create update and delete a `class`. At a minimum, each `class` must have the following properties:

//   - `Name` String
//   - `Type` String
//   - `Start time` Date
//   - `Duration` Integer
//   - `Intensity level` String
//   - `Location` String
//   - `Current number of registered attendees` Integer
//   - `Max class size` Integer

//   5. Authenticated `client` can search for available classes. At a minimum, they must be able to search by the following criteria:

//   - `class time` Time
//   - `class date` Date
//   - `class duration` Integer
//   - `class type` String
//   - `intensity level` String
//   - `class location` String
