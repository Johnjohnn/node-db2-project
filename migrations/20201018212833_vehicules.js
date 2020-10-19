
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
      // translates to "id INTEGER NOT NULL UNIQUE PRIMARY KEY"
      // table.integer("id").notNull().unique().primary()
      table.increments("id")
      table.text("make").notNull()
      table.text("model").notNull()
      table.float("mileage").notNull()
  })
};

exports.down = async function(knex) {
  
};
