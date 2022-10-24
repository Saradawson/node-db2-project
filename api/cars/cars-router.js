const express = require('express')
const Car = require('./cars-model')
const {
    checkCarId,
    checkVinNumberUnique,
    checkCarPayload,
    checkVinNumberValid
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

router.get('/:id', async (req, res, next) => {
    try{
        res.json(req.car)
    }catch(err) {
        next(err)
    }
})

router.post(
    '/',
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
     async (req, res, next) => {
    try{
        res.json('router post')
    }catch(err) {
        next(err)
    }
})

module.exports = router


