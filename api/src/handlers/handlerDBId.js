const { Dog, Temperament } = require("../db");

const handlerDBId = async (id) => {
  const data = await Dog.findAll({
    where: { id },
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
  return value[0];
};

module.exports = handlerDBId;
