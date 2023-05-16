const { Dog } = require("../db");
const { Temperament } = require("../db");

const handlerPostDogs = async (
  name,
  image,
  height,
  weight,
  life_span,
  temperament
) => {
  const newDog = await Dog.create({
    name,
    image,
    height,
    weight,
    life_span,
    temperament,
  });

  const temperamentdb = await Temperament.findAll({
    where: { name: temperament },
  });

  newDog.addTemperament(temperamentdb);

  return newDog;
};

module.exports = handlerPostDogs;
