// To populate the database, run this file with the terminal command:
//    node seed.js
require("dotenv").config();
require("./config/database");

const Cocktail = require("./models/Cocktail");
const Mood = require("./models/Mood");
const Mixtape = require("./models/Mixtape");
const Tag = require("./models/Tag");

async function populateDB() {
  await Mood.deleteMany({});
  const moods = await Mood.create([
    { content: "Happy" }, // 0
    { content: "Dramatic" }, // 1
    { content: "Hypocritical" }, // 2
    { content: "Insecure" }, // 3
    { content: "Depressed" }, // 4
    { content: "Fun" }, // 5
    { content: "Mellow" }, // 6
    { content: "Chill" }, // 7
    { content: "Sexy-time" }, // 8
    { content: "Romantic" }, // 9
    { content: "British" }, // 10
    { content: "Benny-ish" }, // 11
    { content: "Molly" }, // 12
    { content: "Drained" }, // 13
    { content: "Inspired" }, // 14
  ]);

  await Tag.deleteMany({});
  const tag = await Tag.create([
    { content: "Sweet" }, // 0
    { content: "Salty" }, // 1
    { content: "Sour" }, // 2
    { content: "Omommy" }, // 3
    { content: "Slanderous" }, // 4
    { content: "Sahara" }, // 5
    { content: "Effervescent" }, // 6
  ]);

  await Cocktail.deleteMany({});
  const cocktail = await Cocktail.create([
    {
      name: "Old-Fashioned", // 0
      description: "They say the old is in again",
      instruction: "Stir and serve",
      ingredients: [
        { name: "Bourbon", qty: 2 },
        { name: "Simple Syrup", qty: 0.25 },
        { name: "Angos", qty: 2 },
      ],
      tags: [tag[0].id, tag[5].id],
      image:
        "https://assets.bonappetit.com/photos/58409ff731e0aa8a6cd383f8/5:7/w_648,h_908,c_limit/bas-best-old-fashioned.jpg",
    },
    {
      name: "Toronto", // 1
      description: "Feel the taste of the city go down your moist gullet",
      instruction: "Add ingredients and mix with maple syrup coated spoon.",
      ingredients: [
        { name: "Canadian Rye Whiskey", qty: 2 },
        { name: "Fernet Branca", qty: 0.25 },
        { name: "Maple Syrup", qty: 0.25 },
        { name: "Angos", qty: 2 },
      ],
      tags: [tag[0].id],
      image:
        "https://assets-prd.punchdrink.com/wp-content/uploads/2021/10/15102845/Article-Fernet-Branca-Cocktail-Recipe-Toronto.jpg",
    },
    {
      name: "Tommy's Margarita", // 2
      description: "A regular margarita, but Tommy's a bit picky",
      instruction: "Dirty pour this...",
      ingredients: [
        { name: "Tequila", qty: 2 },
        { name: "Lime Juice", qty: 0.75 },
        { name: "Agave Syrup", qty: 0.75 },
      ],
      tags: [tag[2].id, tag[0].id],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07UCAAXZdpGLd7UYV0AkPXrxdU5o7jiv2lw&usqp=CAU",
    },
    {
      name: "Daiquiri", // 3
      description: "Like a shot of rum for weak people",
      instruction: "Dirty pour this...",
      ingredients: [
        { name: "White Rum", qty: 2 },
        { name: "Lime Juice", qty: 0.75 },
        { name: "Simple Syrup", qty: 0.75 },
      ],
      tags: [tag[0].id],
      image:
        "https://www.liquor.com/thmb/kU5L4WsnCEJY9wyui7cPGSuyvuA=/720x720/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__04__23143458__daiquiri-720x720-recipe-09f1d5665a794eddbbfb997876736136.jpg",
    },
    {
      name: "Manhattan", // 4
      description:
        "Holds all the bitterness of a New Yorker but the sweetness of its potential.",
      instruction: "Fold the ingredients together like a pizza",
      ingredients: [
        { name: "Rye Whiskey", qty: 2 },
        { name: "Sweet Vermouth", qty: 0.75 },
        { name: "Angos", qty: 2 },
      ],
      tags: [tag[4].id, tag[0].id],
      image:
        "https://vintageamericancocktails.com/wp-content/uploads/2021/03/Manhattan-1900s.jpg",
    },
    {
      name: "Corpse Reviver #2", // 5
      description: "Benny's Fav, so I mean you can't go wrong.",
      instruction: "You'll have to find a proper bartender for this",
      ingredients: [
        { name: "Gin", qty: 0.75 },
        { name: "Lillet Blanc", qty: 0.75 },
        { name: "Cointreau", qty: 0.75 },
        { name: "Lemon Juice", qty: 0.75 },
        { name: "Absinthe or Pernod", qty: 3 },
      ],
      tags: [tag[0].id, tag[2].id],
      image:
        "https://www.supergoldenbakes.com/wordpress/wp-content/uploads/2019/12/Corpse_Reviver_No2.jpg",
    },
    {
      name: "Dry Martini", // 6
      description: "For people who wanna look fancier than they are.",
      instruction: "Shaken, not stired",
      ingredients: [
        { name: "Gin", qty: 2 },
        { name: "Dry Vermouth", qty: 0.75 },
      ],
      tags: [tag[5].id],
      image:
        "https://imbibemagazine.com/wp-content/uploads/2018/10/death-and-co-ideal-martini-horizontal-crdt-dylan-and-jeni.jpg",
    },
    {
      name: "Between the Sheets", // 7
      description:
        "Like a sidecar, but you're mature enough to take it back home",
      instruction: "Dirty pour",
      ingredients: [
        { name: "Cognac", qty: 1.5 },
        { name: "Curaçao", qty: 0.75 },
        { name: "White Rum", qty: 0.5 },
        { name: "Lemon Juice", qty: 0.5 },
      ],
      tags: [tag[0].id],
      image:
        "https://www.acouplecooks.com/wp-content/uploads/2020/05/Between-the-Sheets-Cocktail-006.jpg",
    },
    {
      name: "Mint Julep", // 8
      description:
        "Cool yourself in the summer sun and be blessed with the minty breeze",
      instruction: "Crush some mint and mix her up",
      ingredients: [
        { name: "Bourbon", qty: 2 },
        { name: "Simple Syrup", qty: 0.5 },
        { name: "Mint Leaves", qty: 8 },
      ],
      tags: [tag[0].id, tag[6].id],
      image:
        "https://www.liquor.com/thmb/I4TMQxCzojbuBMu3znFVWb84ZgY=/735x0/mint-julep-720x720-primary-5e2063b906384479b345687201992bd0.jpg",
    },
    {
      name: "Espresso Martini",
      description: "The British morning drink of choice after tea.",
      instruction:
        "Shake it hard, pour in a glass and drop 3 coffee beans on top",
      ingredients: [
        { name: "Vodka", qty: 2 },
        { name: "Coffee Liqueur", qty: 1 },
        { name: "Simple Syrup", qty: 0.5 },
      ],
      tags: [tag[0].id, tag[3].id],
      image:
        "https://assets-global.website-files.com/60c0fbd82efb7bdbe7192d01/61789397a19f8b31f74dff7a_Main-Recipe-Image-Expresso-Martini.jpg",
    },
    {
      name: "Gin & Tonic",
      description: "Classic",
      instruction: "Dirty pour this...",
      ingredients: [
        { name: "gin", qty: 1.5 },
        { name: "Tonic Water", qty: 3 },
      ],
      tags: [tag[4].id, tag[6].id],
      image:
        "https://www.telegraph.co.uk/content/dam/luxury/2019/07/17/DSC8022_IG_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.JPG",
    },
    {
      name: "Parasol",
      description: "When you wanna get smashed on fruit punch",
      instruction: "Stick an umbrella on it",
      ingredients: [
        { name: "Pisco", qty: 2 },
        { name: "Lime", qty: 0.25 },
        { name: "Red Juice", qty: 2 },
      ],
      tags: [tag[0].id],
      image:
        "https://i.pinimg.com/564x/6a/bd/29/6abd29d17559c00634e95ed4ab86d2d1.jpg",
    },
    {
      name: "White Russian",
      description: "Lebowski sponsored",
      instruction: "Dirty pour this...",
      ingredients: [
        { name: "Vodka", qty: 2 },
        { name: "Coffee Liqueur", qty: 1 },
        { name: "Heavy Cream", qty: 0.5 },
      ],
      tags: [tag[0].id, tag[3].id],
      image:
        "https://www.marketingdirecto.com/wp-content/uploads/2014/09/Jeff-Bridges-300x300.jpg",
    },
    {
      name: "Americano",
      description: "Fav of the American ex-pats",
      instruction: "Dirty pour this...",
      ingredients: [
        { name: "Campari", qty: 1.5 },
        { name: "Sweet Vermouth", qty: 1.5 },
        { name: "Soda Water", qty: 1 },
      ],
      tags: [tag[4].id],
      image:
        "https://imbibemagazine.com/wp-content/uploads/2020/07/kold-brew-americano-master.jpg",
    },
    {
      name: "Negroni",
      description: "",
      instruction: "Dirty pour this...",
      ingredients: [
        { name: "Tequila", qty: 2 },
        { name: "Lime", qty: 1 },
        { name: "Agave Syrup", qty: 0.5 },
      ],
      tags: [tag[4].id],

      image:
        "https://i.pinimg.com/236x/b4/97/7b/b4977bdb2fee16462136b2269fe984c3.jpg",
    },
  ]);

  await Mixtape.deleteMany({});
  await Mixtape.create([
    {
      name: "Jamie's Gloomy Mix",
      cocktails: [cocktail[6].id],
      playlists: [
        "https://open.spotify.com/playlist/1szi0vzd7bPHLiIwgXCIjA?si=6b8e050d0bd34742",
      ],
      moods: [moods[13].id, moods[0].id],
    },
    {
      name: "Punk Mix",
      cocktails: [cocktail[11].id],
      playlists: [
        "https://open.spotify.com/playlist/5Tlr1XQHpIjyVRpsVHpDig?si=7ddeb70948574de0",
      ],
      moods: [moods[4].id],
    },
    {
      name: "Sexy Mix Tape",
      cocktails: [cocktail[7].id],
      playlists: [
        "https://open.spotify.com/playlist/7sFgh2Ebte5ZxF8QiIlZ7J?si=cbecf0f3c4f64195",
      ],
      moods: [moods[8].id],
    },
    {
      name: "Happy Mix Tape",
      cocktails: [cocktail[9].id],
      playlists: ["https://open.spotify.com/playlist/1Io2vGf0wVNvrm5SuS0e1b"],
      moods: [moods[0].id],
    },
    {
      name: "Happy Mix Tape #2",
      cocktails: [cocktail[9].id],
      playlists: ["https://open.spotify.com/playlist/1Io2vGf0wVNvrm5SuS0e1b"],
      moods: [moods[0].id],
    },
  ]);
}

populateDB();
