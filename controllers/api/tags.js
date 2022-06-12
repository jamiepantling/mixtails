const Tag = require('../../models/Tag')

module.exports = {
    show
}

async function show(req,res) {
    const tags = await Tag.find({})
    res.json(tags)
}