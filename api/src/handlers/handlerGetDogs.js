const axios = require("axios");
require("dotenv").config();
const { Dog, Temperament } = require("../db");
const { API_KEY, ENDPOINT } = process.env;

const getApi = async () => {
  const { data } = await axios.get(`${ENDPOINT}`);
  const infoApi = data.map((element) => {
    return {
      id: element.id,
      image: element.image.url,
      name: element.name,
      weight: element.weight.metric,
      height: element.height.metric,
      life_span: element.life_span,
      temperament: element.temperament,
      createdInDb: false,
    };
  });
  return infoApi;
};

const getDB = async () => {
  const data = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  const value = data.map((element) => {
    const temperaments = element.temperaments.map((t) => t.name);
    return {
      id: element.id,
      image: element.image,
      name: element.name,
      weight: element.weight,
      height: element.height,
      life_span: element.life_span,
      temperament: temperaments.join(", "),
      createdInDb: true,
    };
  });
  return value;
};

const handlerGetDogs = async () => {
  const apiInfo = await getApi();
  const dbInfo = await getDB();
  const total = apiInfo.concat(dbInfo);
  return total;
};

module.exports = handlerGetDogs;
