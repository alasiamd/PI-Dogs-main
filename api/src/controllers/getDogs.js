const axios = require("axios");
require("dotenv").config();
const { Dog, Temperament } = require("../db");
const { handlerGetDogs } = require("../handlers/index");

const { API_KEY, ENDPOINT } = process.env;
const getDogs = async (req, res) => {
  const { search } = req.query;
  const dogs = await handlerGetDogs();
  try {
    if (search) {
      let searchedDog = dogs.filter((element) =>
        element.name.toLowerCase().includes(search.toLowerCase())
      );
      searchedDog.length
        ? res.status(200).json(searchedDog)
        : res.status(404).json({ message: "Personaje no encontrado" });
    } else {
      res.status(200).json(dogs);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDogs;
