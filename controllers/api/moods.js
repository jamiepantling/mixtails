const Mood = require('../../models/Mood')

module.exports = {
    show
}

async function show(req,res) {
    const moods = await Mood.find({})
    res.json(moods)
}