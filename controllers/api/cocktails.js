const Cocktail = require('../../models/Cocktail')

module.exports = {
    show
}

async function show(req,res) {
    const cocktails = await Cocktail.find({})
    res.json(cocktails)
}