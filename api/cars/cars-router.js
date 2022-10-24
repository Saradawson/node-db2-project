const express = require('express')
const Car = require('./cars-model')
const {
    checkCarId
} = require('./cars-middleware')

const router = express.Router()


router.get('/', async (req, res, next) => {
   try{ 
        const cars = await Car.getAll()
        res.json(cars)
   }catch(err) {
        next(err)
   }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    try{
        const car = await Car.getById(req.params.id)
        res.json(car)
    }catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        res.json('router post')
    }catch(err) {
        next(err)
    }
})

module.exports = router


