const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    english: {
      type: String,
      required: true,
    },
  },
  type: {
    type: [String],
    required: true,
  },
  base: {
    HP: {
      type: Number,
      required: true,
    },
    Attack: {
      type: Number,
      required: true,
    },
    Defense: {
      type: Number,
      required: true,
    },
    "Sp. Attack": {
      type: Number,
      required: true,
    },
    "Sp. Defense": {
      type: Number,
      required: true,
    },
    Speed: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
