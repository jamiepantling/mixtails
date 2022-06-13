const Mixtape = require('../../models/Mixtape')

module.exports = {
    show,
    update
}

async function show(req,res) {
    const mixtapes = await Mixtape.find({})
    res.json(mixtapes)
}

async function update(req, res) {
    req.params.id
}