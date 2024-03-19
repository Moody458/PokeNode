const express = require("express");

const {
  createPokemon,
  getAllPokemon,
  getOnePokemon,
} = require("../controllers/pokemon");

const api = express.Router();

api.route("/").get(getAllPokemon).post(createPokemon);

api.route("/:id").get(getOnePokemon);

module.exports = api;
