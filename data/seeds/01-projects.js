exports.seed = function(knex, Promise) {
    return knex('projects').insert([
        {
            project_name: 'create database',
            project_description: 'use knex and sqlite to create a database',
            project_completed: true
        },
        {
            project_name: 'create endpoints',
            project_description: 'use express and nodemon to create endpoints',
        }
    ])
}