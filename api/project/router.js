// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')
const validateProject = require('./middleware')

const router = express.Router()

router.get('/',  (req, res, next) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            next(err)
        }) 
})

router.post('/', validateProject, (req, res, next) => {
    Projects.createProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            next(err)
        })
})


module.exports = router