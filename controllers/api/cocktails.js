const Cocktail = require("../../models/Cocktail");

module.exports = {
  index,
  deleteCocktail,
};

async function index(req, res) {
  const cocktails = await Cocktail.find({})
  .populate("tags").exec()
  res.json(cocktails);
}

// cocktail delete function
async function deleteCocktail(req, res) {
  await Cocktail.findByIdAndDelete(req.body.cocktailId,
    err => {
      if (err) return res.send(err);
    //   if (!req.user._id.equals(cocktail.createdBy)) cocktail.remove();
    });

}
