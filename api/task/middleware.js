const db = require('../../data/dbConfig')

const validateTask = async (req, res, next) => {

    if(!req.body.task_description) {
        res.status(400).json({message: 'task description or project_id is empty'})
    } else if(!req.body.project_id) {
        res.status(404).json({message: 'project does not exist'})
    } else {
        next()
    }
}

const validateProjectId = async (req, res, next) => {
    const existingProject = await db('projects').where('project_id', req.body.project_id).first()
    if(!existingProject) {
        res.status(404).json({message: 'project not found'})
    } else {
        next()
    }
    
}
module.exports = {
    validateTask,
    validateProjectId,
}