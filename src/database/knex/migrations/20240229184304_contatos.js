exports.up = (knex) => {
    return knex.schema.createTable("contatos", (table) => {
      table.increments('id').primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("text");
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExist('contatos')
  };
