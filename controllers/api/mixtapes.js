const Mixtape = require('../../models/Mixtape')

module.exports = {
    index,
    show
}

async function index(req,res) {
    const mixtapes = await Mixtape.find({})
    res.json(mixtapes)
}

async function show(req, res) {
    const mixtape = await Mixtape.findById(req.params.id)
    res.json(mixtape)
}

async function getMoods(req, res) {
    const mixtape = await Mixtape.findById(req.params.id)
    const moods = mixtape.moods.populate("Mood")
    res.json(moods)
}