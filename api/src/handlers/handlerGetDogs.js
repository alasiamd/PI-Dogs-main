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
      temperament: element.temperament,
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
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const handlerGetDogs = async () => {
  const apiInfo = await getApi();
  const dbInfo = await getDB();
  console.log(dbInfo);
  const total = apiInfo.concat(dbInfo);
  return total;
};

module.exports = handlerGetDogs;
