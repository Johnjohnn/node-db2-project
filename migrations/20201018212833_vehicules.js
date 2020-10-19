
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
      // translates to "id INTEGER NOT NULL UNIQUE PRIMARY KEY"
      table.integer("id").notNull().unique().primary()
  })
};

exports.down = async function(knex) {
  
};
