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
    console.log("Mixtape: " + mixtape) 
    res.json(mixtape)
    
}
