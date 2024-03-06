exports.up = (knex) => {
    return knex.schema.createTable("contatos", (table) => {
      table.increments('id').primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.boolean("isAdmin").defaulTo("false");

      table.timestamp(created_at).defaulTo(knex.fn.now());
      table.timestamp(updated_at).defaulTo(knex.fn.now());
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExist('users')
  };
