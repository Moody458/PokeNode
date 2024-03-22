const Pokemon = require("../schemas/Pokemon");

//Post - Create
const createPokemon = async (req, res) => {
  try {
    const { id, english, french, type, HP, Attack, Defense, Speed } = req.body;
    const pokemon = await Pokemon.create({
      id,
      english,
      french,
      type,
      HP,
      Attack,
      Defense,
      Speed,
    });
    res.status(201).json({
      message: "Pokemon created successfully!",
      data: pokemon,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

//Get All
const getAllPokemon = async (req, res) => {
  try {
    const pokemons = await Pokemon.find().sort({ _id: 1 });
    pokemons.forEach((pokemon) => {
      console.log(pokemon.name.english);
    });
    if (!pokemons.length) {
      res.status(200).json({ message: "No Pokemon's in the DB" });
    } else {
      res.status(200).json({
        data: pokemons,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
    console.log(error);
  }
};

//Get Single
const getOnePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const singlePokemon = await Pokemon.findOne({ id: parseInt(id) });

    if (singlePokemon) {
      return res.status(200).json({ data: singlePokemon });
    }
    res.status(404).json({ message: "I don't know this Pokemon :(" });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  getAllPokemon,
  getOnePokemon,
  createPokemon,
};
