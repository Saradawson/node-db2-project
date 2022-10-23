// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 12234,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '22222222222',
        make: 'toyota',
        model: 'corolla',
        mileage: 150000,
        title: 'salvaged',
    },
    {
        vin: '3333333333',
        make: 'ford',
        model: 'focus',
        mileage: 122334
    },

]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}