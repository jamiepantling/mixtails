const Mixtape = require('../../models/Mixtape')

module.exports = {
    show,
    update,
    index,
    addMood,
    create,
    deleteMixtape,
    // getMoods
}

async function index(req,res) {
    const mixtapes = await Mixtape.find({})
    res.json(mixtapes)
}

async function update(req, res) {
    
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

async function create(req, res) {
    try {
        console.log(req.body)
        const mixtape = await Mixtape.create({
            name: req.body.name,
            cocktails: [req.body.cocktails],
            moods: [req.body.moods],
            playlists: [req.body.playlist],
            createdBy: req.body.createdBy
        })
        res.status(200).json()
    } catch (error) {
        console.log("Error! ", error)
    }
}

async function deleteMixtape(req, res) {
    try {
        await Mixtape.findByIdAndDelete(req.body.mixtapeId)
        res.status(200).json()
    } catch (error) {
        console.log("Error! ", error)
    }
  }

