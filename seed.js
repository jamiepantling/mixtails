// To populate the database, run this file with the terminal command:
//    node seed.js
require("dotenv").config();
require("./config/database");

const Cocktail = require("./models/Cocktail")
const Mood = require("./models/Mood")
const Mixtape = require("./models/Mixtape");
const Tag = require("./models/Tag")

  async function populateDB() {
   
   await Mood.deleteMany({})
   await Mood.create([
    {content: 'Happy'},
    {content: 'Dramatic'},
    {content: 'Hypocritical'},
    {content: 'Insecure'},
    {content: 'Depressed'}
   ])

   await Mixtape.deleteMany({})
   await Mixtape.create([
    {
      name: 'Happy Mix'
    },
    {name: 'Sad Mix'},
   
   ])
   
   await Tag.deleteMany({})
   await Tag.create([
     {content: 'Sweet'},
     {content: 'Salty'},  
     {content: 'Sour'},  
     {content: 'Savoury'},
     {content: 'Slanderous'}
   ])

    // mongoose method to delete all documents in the model
    await Cocktail.deleteMany({});
    await Cocktail.create([
      {
        name: "Old-Fashioned",
        description: "",
        instruction: "",
        ingredients: [{name: 'Bourbon', qty: 2}, {name: 'Simple Syrup', qty: 0.25}, {name: 'Angos', qty: 2}],
        // tags: [{"", ""}],
        image: "",
      }, 
      {
        name: "Nasty Cocktail",
        description: "",
        instruction: "",
        ingredients: [{name: 'Nastee', qty: 2}, {name: 'Nastee', qty: 0.25}, {name: 'Angos', qty: 2}],
        // tags: [{"", ""}],
        image: "",
      }, 
      // {
      //   name: "Toronto",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: "",
      // },
      // {
      //   name: "Tommy's Margarita",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: "",
      // },
      // {
      //   name: "Daiquiri",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: "",
      // },
      // {
      //   name: "Manhattan",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: "",
      // },
      // {
      //   name: "Corpse Reviver #2",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: "",
      // },
      // {
      //   name: "dry Martini",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: "",
      // },
      // {
      //   name: "Between the Sheets",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: "",
      // },
      // {
      //   name: "Mint Julep",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: "",
      // },
      // {
      //   name: "Espresso Martini",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: ''
      // },
      // {
      //   name: "Gin & Tonic",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: ''
      // }, {
      //   name: "Mojito",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: ''
      // }, {
      //   name: "Moscow Mule",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: ''
      // }, {
      //   name: "Parasol",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: ''
      // }, {
      //   name: "White Russian",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: ''
      // }, {
      //   name: "Americano",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: ''
      // }, {
      //   name: "Negroni",
      //   description: "",
      //   instruction: "",
      //   ingredients: ["", "", ""],
      //   tags: ["", ""],
      //   image: ''
      // }
    ])

  }

populateDB()