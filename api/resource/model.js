// build your `Resource` model here
const db = require('../../data/dbConfig')


async function getResources() {
    return db('resources')
}

async function createResource(resource) {
    const resourceId = await db('resources').insert(resource)
    const newResource = await db('resources').where('resource_id', resourceId).first()
    return newResource
}

module.exports = {
    getResources,
    createResource,
}