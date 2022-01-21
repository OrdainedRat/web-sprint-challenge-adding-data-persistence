exports.seed = function(knex, Promise) {
    return knex('tasks').insert([
        {
            task_description: 'create a migration file',
            task_notes: 'notes',
            task_completed: false,
            project_id: 1
        },
        {
            task_description: 'install express',
            task_notes: 'notes 2',
            project_id: 2
        },
    ])
}