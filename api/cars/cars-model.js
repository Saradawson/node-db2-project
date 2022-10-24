const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where('id', id)
}

const getByVin = (vin) => {
  return db('cars').where('vin', vin)
}

const create = (car) => {
  db('cars').insert(car)
}

module.exports = {
  getAll,
  getById,
  create,
  getByVin
}
