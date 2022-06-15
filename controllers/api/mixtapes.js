const Mixtape = require('../../models/Mixtape')
const {inspect} = require('util')

module.exports = {
    show,
    update,
    index,
    addRemoveMood,
    create,
    deleteMixtape,
    // getMoods
}

async function index(req,res) {
    const mixtapes = await Mixtape.find({})
    .populate("moods").populate("cocktails").exec();
    // console.log(mixtapes)
    console.log(inspect(mixtapes, {depth: null}))
    res.json(mixtapes)
}

async function update(req, res) {
    
}


async function show(req, res) {
    const mixtape = await Mixtape.findById(req.params.id)
    res.json(mixtape)
}


async function addRemoveMood(req, res) {
    try {
        const mixtape = await Mixtape.findById(req.params.id)
        const moodId = req.body.moodId
        if (!mixtape.moods.includes(moodId)) {
        mixtape.moods.push(moodId)
        await mixtape.save()
        res.status(200).json()
       } else {
        let index = mixtape.moods.indexOf(moodId);
        await mixtape.moods.splice(index, 1);
        await mixtape.save()
        res.status(200).json()
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

async function update(req, res) {
    try {
        let mixtape = await Mixtape.findById(req.params.id)
        mixtape.name = req.body.name
        mixtape.playlists = [req.body.playlist]
        mixtape.save()
        res.status(200).json()
    } catch(error) {
        console.log("Error: ", error)
    }
}