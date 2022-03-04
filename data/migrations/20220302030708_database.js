exports.up = function (knex) {
  return knex.schema
    .createTable("classes", (classes) => {
      classes.increments("class_id");
      classes.string("Name", 32).notNullable().unique()
      classes.string("Type", 32).notNullable()
      classes.date("Start_Time", 32).notNullable()
      classes.integer("Duration", 32).notNullable()
      classes.string("Intensity_level", 32).notNullable()
      classes.string("Location", 32).notNullable()
      classes
        .integer("Current_Number_Of_Registered_Attendees", 32)
        .notNullable()
      classes.integer("Max_Class_Size", 32).notNullable()
      classes.string("Category")
    })

    

    .createTable("clients", (client) => {
      client.increments("client_id");
      client.string('username').notNullable().unique()
      client.string('password').notNullable()
      client.string("Name", 32).notNullable()
      client.string("Class", 32).unique().unsigned()
        .references('class_id')
        .inTable('classes')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
   
      //   .unsigned()
      //   .notNullable()
      //   .references('role_id')
      //   .inTable('roles')
      //   .onUpdate('RESTRICT')
      //   .onDelete('RESTRICT')
});
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("classes").dropTableIfExists("clients");
};

// Name
// Age
// Class


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
