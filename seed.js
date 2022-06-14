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
  ]);

  await Tag.deleteMany({});
  await Tag.create([
    { content: "Sweet" },
    { content: "Salty" },
    { content: "Sour" },
    { content: "Savoury" },
    { content: "Slanderous" },
  ]);

  // mongoose method to delete all documents in the model
  await Cocktail.deleteMany({});
  await Cocktail.create([
    {
      name: "Old-Fashioned",
      description: "",
      instruction: "",
      ingredients: [
        { name: "Bourbon", qty: 2 },
        { name: "Simple Syrup", qty: 0.25 },
        { name: "Angos", qty: 2 },
      ],
      // tags: ["Dry", "Sweet-ish"],
      image: "",
    },
    {
      name: "Toronto",
      description: "",
      instruction: "",
      ingredients: [
        { name: "Canadian Rye Whiskey", qty: 2 },
        { name: "Fernet Branca", qty: 0.25 },
        { name: "Maple Syrup", qty: 0.25 },
        { name: "Angos", qty: 2 },
      ],
      // tags: [{"", ""}],
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
      // tags: ["Sour", "Sweet"],
      image:
        "https://files.slack.com/files-pri/T0351JZQ0-F03KCG0RT61/image.png",
    },
    {
      name: "Daiquiri",
      description: "",
      instruction: "Dirty pour this...",
      ingredients: [
        { name: "White Rum", qty: 2 },
        { name: "Lime Juice", qty: 0.75 },
        { name: "Simple Syrup", qty: 0.75 },
      ],
      // tags: [{"", ""}],
      image: "",
    },
    {
      name: "Manhattan",
      description: "",
      instruction: "Dirty pour this...",
      ingredients: [
        { name: "Rye Whiskey", qty: 2 },
        { name: "Sweet Vermouth", qty: 0.75 },
        { name: "Angos", qty: 2 },
      ],
      // tags: [{"", ""}],
      image: "",
    },
    {
      name: "Corpse Reviver #2",
      description: "",
      instruction: "Dirty pour this...",
      ingredients: [
        { name: "Gin", qty: 0.75 },
        { name: "Lillet Blanc", qty: 0.75 },
        { name: "Cointreau", qty: 0.75 },
        { name: "Lemon Juice", qty: 0.75 },
        { name: "Absinthe or Pernod", qty: 3 },
      ],
      // tags: [{"", ""}],
      image: "",
    },
    {
      name: "Dry Martini",
      description: "",
      instruction: "Shaken, not stired",
      ingredients: [
        { name: "Gin", qty: 2 },
        { name: "Dry Vermouth", qty: 0.75 },
      ],
      // tags: [{"", ""}],
      image: "",
    },
    {
      name: "Between the Sheets",
      description: "",
      instruction: "Dirty pour this...",
      ingredients: [
        { name: "Cognac", qty: 1.5 },
        { name: "Curaçao", qty: 0.75 },
        { name: "White Rum", qty: 0.5 },
        { name: "Lemon Juice", qty: 0.5 },
      ],
      // tags: [{"", ""}],
      image: "",
    },
    {
      name: "Mint Julep",
      description: "",
      instruction: "Dirty pour this...",
      ingredients: [
        { name: "Bourbon", qty: 2 },
        { name: "Simple Syrup", qty: 0.5 },
        { name: "Mint Leaves", qty: 8 },
      ],
      // tags: [{"", ""}],
      image: "",
    },
    //   {
    //     name: "Espresso Martini",
    //     description: "",
    //     instruction: "Dirty pour this...",
    //     ingredients: [
    //       { name: "Tequila", qty: 2 },
    //       { name: "Lime", qty: 0.25 },
    //       { name: "Angos", qty: 2 },
    //     ],
    //     // tags: [{"", ""}],
    //     image: "",
    //   },
    //   {
    //     name: "Gin & Tonic",
    //     description: "",
    //     instruction: "Dirty pour this...",
    //     ingredients: [
    //       { name: "Tequila", qty: 2 },
    //       { name: "Lime", qty: 0.25 },
    //       { name: "Angos", qty: 2 },
    //     ],
    //     // tags: [{"", ""}],
    //     image: "https://files.slack.com/files-pri/T0351JZQ0-F03KCJ29C9K/image.png",
    //   },
    //   {
    //     name: "Parasol",
    //     description: "",
    //     instruction: "Dirty pour this...",
    //     ingredients: [
    //       { name: "Tequila", qty: 2 },
    //       { name: "Lime", qty: 0.25 },
    //       { name: "Angos", qty: 2 },
    //     ],
    //     // tags: [{"", ""}],
    //     image: "",
    //   },
    //   {
    //     name: "White Russian",
    //     description: "",
    //     instruction: "Dirty pour this...",
    //     ingredients: [
    //       { name: "Tequila", qty: 2 },
    //       { name: "Lime", qty: 0.25 },
    //       { name: "Angos", qty: 2 },
    //     ],
    //     // tags: [{"", ""}],
    //     image: "",
    //   },
    //   {
    //     name: "Americano",
    //     description: "",
    //     instruction: "Dirty pour this...",
    //     ingredients: [
    //       { name: "Tequila", qty: 2 },
    //       { name: "Lime", qty: 0.25 },
    //       { name: "Angos", qty: 2 },
    //     ],
    //     // tags: [{"", ""}],
    //     image: "",
    //   },
    //   {
    //     name: "Negroni",
    //     description: "",
    //     instruction: "Dirty pour this...",
    //     ingredients: [
    //       { name: "Tequila", qty: 2 },
    //       { name: "Lime", qty: 0.25 },
    //       { name: "Angos", qty: 2 },
    //     ],
    //     // tags: [{"", ""}],
    //     image: "",
    //   },
  ]);
}

populateDB();
