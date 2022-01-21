// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')
const validateResource = require('./middleware')
const router = express.Router()

router.get('/', (req, res, next) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            next(err)
        })
})

router.post('/', validateResource,  (req, res, next) => {
    Resources.createResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router