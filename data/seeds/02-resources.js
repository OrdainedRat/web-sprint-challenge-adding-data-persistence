exports.seed = function(knex, Promise) {
    return knex('resources').insert([
        {
            resource_name: 'knex',
            resource_description:'a SQL query builder for JS'
        },
        {
            resource_name: 'sqlite',
            resource_description:'a relational database management system'
        },
        {
            resource_name: 'express',
            resource_description:'a backend framework for node'
        },
        {
            resource_name: 'nodemon',
            resource_description:'a command-line interface that makes node more convenient and efficient'
        },
    ])
}