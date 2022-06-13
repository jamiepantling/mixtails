const Mixtape = require('../../models/Mixtape')

module.exports = {
    index,
    show,
    addMood,
    // getMoods
}

async function index(req,res) {
    const mixtapes = await Mixtape.find({})
    res.json(mixtapes)
}

async function show(req, res) {
    const mixtape = await Mixtape.findById(req.params.id)
    res.json(mixtape)
}

// async function getMoods(req, res) {
//     const mixtape = await Mixtape.findById(req.params.id)
//     const moods = mixtape.moods.populate("Mood")
//     res.json(moods)
// }

async function addMood(req, res) {
    try {
        const mixtape = await Mixtape.findById(req.params.id)
        const moodId = req.body.moodId
        if (!mixtape.moods.includes(moodId)) {
        await mixtape.moods.push(moodId)
        await mixtape.save()
        res.status(200).json("All good - mood added.")
       }
    } catch(error) {
        res.json(error)
    }    
}

