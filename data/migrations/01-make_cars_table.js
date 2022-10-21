exports.up = async function (knex) {
  await knex.schema.createTable('cars', table => {
    table.increments('id')
    table.string('vin', 13).notNulable().unique()
    table.string('make', 128).notNulable()
    table.string('model', 128).notNulable()
    table.numeric('mileage').unsigned().notNulable()
    table.string('title', 128)
    table.string('transmission', 128)
  })
};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists('cars')
};
