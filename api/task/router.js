// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')
const{ validateTask, validateProjectId } = require('./middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            next(err)
        })
})

router.post('/', validateTask, validateProjectId, (req, res, next) => {
    Tasks.addTasks(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router