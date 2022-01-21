// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    const rows = await db('tasks as ta')
    .join('projects as pr', 'pr.project_id', 'ta.project_id')
    .select('ta.*', 'project_name', 'project_description')

    rows.forEach(row => {
        return row.task_completed = !!row.task_completed
    })

    return rows
}

async function addTasks(task) {
    const taskId = await db('tasks').insert(task)
    const [newTask] = await db('tasks').where('task_id', taskId)

    newTask.task_completed = !!newTask.task_completed

    return newTask
}

module.exports = {
    getTasks,
    addTasks,

}