const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
   try{
        res.json('router get')
   }catch(err) {
        next(err)
   }
})

router.get('/:id', async (req, res, next) => {
    try{
        res.json('router get id')
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


