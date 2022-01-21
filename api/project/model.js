// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    const rows = await db('projects')
    
    rows.forEach(row => {
        return row.project_completed = !! row.project_completed
    })

    return rows
}

async function createProject(project) {
    const created = await db('projects').insert(project)
    const newProject = await db('projects').where('project_id', created).first()
    
  newProject.project_completed = !! newProject.project_completed

    return newProject
}



module.exports = {
    getProjects,
    createProject,
}