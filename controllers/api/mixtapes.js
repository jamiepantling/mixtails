const Mixtape = require('../../models/Mixtape')

module.exports = {
    show
}

async function show(req,res) {
    const mixtapes = await Mixtape.find({})
    res.json(mixtapes)
}