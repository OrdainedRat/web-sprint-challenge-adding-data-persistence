const db = require('../../data/dbConfig')

const validateResource = async (req, res, next) => {
    const { resource_name } = req.body
    const existing = await db('resources').where('resource_name', resource_name).first()
    console.log('exists?', existing)
    if(!resource_name) {
        res.status(400).json({ message: 'Resource name is missing'})
    } else if(existing) {
        res.status(400).json({ message: 'Resource name is taken'})
    } else {
        next()
    }
}

module.exports = validateResource