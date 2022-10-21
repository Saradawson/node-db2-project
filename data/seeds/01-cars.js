// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        modle: 'prius',
        milage: 12234,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1111111111111',
        make: 'toyota',
        modle: 'corolla',
        milage: 150000,
        title: 'salvaged',
    },
    {
        vin: '1111111111111',
        make: 'ford',
        modle: 'focus',
        milage: 122334
    },

]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}