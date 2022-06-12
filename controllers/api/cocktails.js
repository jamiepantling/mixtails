const Cocktail = require("../../models/Cocktail");

module.exports = {
  index,
  deleteCocktail,
};

async function index(req, res) {
  const cocktails = await Cocktail.find({});
  res.json(cocktails);
}

// cocktail delete function
async function deleteCocktail(req, res) {
  console.log("controller function");
  console.log(req.params)
  console.log(req.body);
  await Cocktail.findByIdAndDelete(req.body.cocktailId,
    err => {
      if (err) return res.send(err);
    //   if (!req.user._id.equals(cocktail.createdBy)) cocktail.remove();
    });

}
