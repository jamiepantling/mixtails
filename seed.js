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
  await Mood.create([
    { content: "Happy" },
    { content: "Dramatic" },
    { content: "Hypocritical" },
    { content: "Insecure" },
    { content: "Depressed" },
    { content: "Fun" },
    { content: "Mellow" },
    { content: "Chill" },
    { content: "Sexy-time" },
    { content: "Romantic" },
    { content: "British" },
    { content: "Benny-ish" },
    { content: "Molly" },
    { content: "Drained" },
    { content: "Inspired" },
  ]);

  await Tag.deleteMany({});
  const tag = await Tag.create([
    { content: "Sweet" },
    { content: "Salty" },
    { content: "Sour" },
    { content: "Omommy" },
    { content: "Slanderous" },
    { content: "Sahara" },
    { content: "Effervescent"}
  ]);

  // mongoose method to delete all documents in the model
  await Cocktail.deleteMany({});
  await Cocktail.create([
    {
      name: "Old-Fashioned",
      description: "They say the old is in again",
      instruction: "Stir and serve",
      ingredients: [
        { name: "Bourbon", qty: 2 },
        { name: "Simple Syrup", qty: 0.25 },
        { name: "Angos", qty: 2 },
      ],
      tags: [tag[0].id, tag[5].id],
      image: "",
    },
    {
      name: "Toronto",
      description: "Feel the taste of the city go down your moist gullet",
      instruction: "Add ingredients and mix with maple syrup coated spoon.",
      ingredients: [
        { name: "Canadian Rye Whiskey", qty: 2 },
        { name: "Fernet Branca", qty: 0.25 },
        { name: "Maple Syrup", qty: 0.25 },
        { name: "Angos", qty: 2 },
      ],
      tags: [tag[0].id],
      image: "",
    },
    {
      name: "Tommy's Margarita",
      description: "",
      instruction: "Dirty pour this...",
      ingredients: [
        { name: "Tequila", qty: 2 },
        { name: "Lime Juice", qty: 0.75 },
        { name: "Agave Syrup", qty: 0.75 },
      ],
      tags: [tag[2].id, tag[0].id],
      image:
        "https://files.slack.com/files-pri/T0351JZQ0-F03KCG0RT61/image.png",
    },
    {
      name: "Daiquiri",
      description: "Like a shot of rum for weak people",
      instruction: "Dirty pour this...",
      ingredients: [
        { name: "White Rum", qty: 2 },
        { name: "Lime Juice", qty: 0.75 },
        { name: "Simple Syrup", qty: 0.75 },
      ],
      tags: [tag[0].id],
      image: "",
    },
    {
      name: "Manhattan",
      description:
        "Holds all the bitterness of a New Yorker but the sweetness of its potential.",
      instruction: "Fold the ingredients together like a pizza",
      ingredients: [
        { name: "Rye Whiskey", qty: 2 },
        { name: "Sweet Vermouth", qty: 0.75 },
        { name: "Angos", qty: 2 },
      ],
      tags: [tag[4].id, tag[0].id],
      image: "",
    },
    {
      name: "Corpse Reviver #2",
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
      image: "",
    },
    {
      name: "Dry Martini",
      description: "For people who wanna look fancier than they are.",
      instruction: "Shaken, not stired",
      ingredients: [
        { name: "Gin", qty: 2 },
        { name: "Dry Vermouth", qty: 0.75 },
      ],
      tags: [tag[5].id],
      image: "",
    },
    {
      name: "Between the Sheets",
      description: "Like a sidecar, but you're mature enough to take it back home",
      instruction: "Dirty pour",
      ingredients: [
        { name: "Cognac", qty: 1.5 },
        { name: "Curaçao", qty: 0.75 },
        { name: "White Rum", qty: 0.5 },
        { name: "Lemon Juice", qty: 0.5 },
      ],
      tags: [tag[0].id],
      image: "",
    },
    {
      name: "Mint Julep",
      description: "Cool yourself in the summer sun and be blessed with the minty breeze",
      instruction: "Crush some mint and mix her up",
      ingredients: [
        { name: "Bourbon", qty: 2 },
        { name: "Simple Syrup", qty: 0.5 },
        { name: "Mint Leaves", qty: 8 },
      ],
      tags: [tag[0].id, tag[6].id],
      image: "",
    },
    {
      name: "Espresso Martini",
      description: "The British morning drink of choice after tea.",
      instruction: "Shake it hard, pour in a glass and drop 3 coffee beans on top",
      ingredients: [
        { name: "Tequila", qty: 2 },
        { name: "Lime", qty: 0.25 },
        { name: "Angos", qty: 2 },
      ],
      tags: [tag[0].id, tag[3].id],
      image: "",
    },
      {
        name: "Gin & Tonic",
        description: "Classic",
        instruction: "Dirty pour this...",
        ingredients: [
          { name: "Tequila", qty: 2 },
          { name: "Lime", qty: 0.25 },
          { name: "Angos", qty: 2 },
        ],
        tags: [tag[4].id, tag[6].id],
        image: "https://files.slack.com/files-pri/T0351JZQ0-F03KCJ29C9K/image.png",
      },
      {
        name: "Parasol",
        description: "",
        instruction: "Dirty pour this...",
        ingredients: [
          { name: "Tequila", qty: 2 },
          { name: "Lime", qty: 0.25 },
          { name: "Angos", qty: 2 },
        ],
        tags: [tag[0].id],
        image: "",
      },
      {
        name: "White Russian",
        description: "Lebowski sponsored",
        instruction: "Dirty pour this...",
        ingredients: [
          { name: "Tequila", qty: 2 },
          { name: "Lime", qty: 0.25 },
          { name: "Angos", qty: 2 },
        ],
        tags: [tag[0].id, tag[3].id],
        image: "",
      },
      {
        name: "Americano",
        description: "Fav of the American ex-pats",
        instruction: "Dirty pour this...",
        ingredients: [
          { name: "Tequila", qty: 2 },
          { name: "Lime", qty: 0.25 },
          { name: "Angos", qty: 2 },
        ],
        tags: [tag[4].id],
        image: "",
      },
      {
        name: "Negroni",
        description: "",
        instruction: "Dirty pour this...",
        ingredients: [
          { name: "Tequila", qty: 2 },
          { name: "Lime", qty: 0.25 },
          { name: "Angos", qty: 2 },
        ],
        tags: [tag[4].id],
        image: "",
      },
  ]);
}

populateDB();
